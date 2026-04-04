from __future__ import annotations

import re
from pathlib import Path

import matplotlib

matplotlib.use("Agg")

import matplotlib.dates as mdates
import matplotlib.pyplot as plt
from matplotlib import font_manager
from matplotlib.patches import FancyBboxPatch
from matplotlib.ticker import FuncFormatter
import numpy as np
import pandas as pd
import seaborn as sns


WEBSITE_DIR = Path(__file__).resolve().parents[1]
BASE_DIR = WEBSITE_DIR.parent
DATA_PATH = BASE_DIR / "Lingma-case" / "Weibo" / "News" / "央广网.xlsx"
OUTPUT_DIR = WEBSITE_DIR / "assets" / "projects"


def pick_cjk_font() -> str:
    candidates = [
        "Microsoft YaHei",
        "SimHei",
        "Source Han Sans SC",
        "Microsoft JhengHei",
        "Noto Sans CJK SC",
    ]
    available = {font.name for font in font_manager.fontManager.ttflist}
    for candidate in candidates:
        if candidate in available:
            return candidate
    return "sans-serif"


def setup_style() -> None:
    sns.set_theme(style="whitegrid", context="talk")
    plt.rcParams.update(
        {
            "font.family": pick_cjk_font(),
            "axes.unicode_minus": False,
            "figure.facecolor": "#f8fafc",
            "axes.facecolor": "#ffffff",
            "axes.edgecolor": "#cbd5e1",
            "axes.labelcolor": "#334155",
            "axes.titlecolor": "#0f172a",
            "xtick.color": "#475569",
            "ytick.color": "#475569",
            "grid.color": "#e2e8f0",
            "grid.linewidth": 0.9,
            "axes.spines.top": False,
            "axes.spines.right": False,
            "savefig.facecolor": "#f8fafc",
            "savefig.bbox": "tight",
        }
    )


def clean_text(value: object) -> str:
    text = str(value or "")
    text = re.sub(r"<[^>]+>", "", text)
    text = re.sub(r"https?://\S+", "", text)
    text = re.sub(r"#([^#]+)#", r"\1", text)
    text = re.sub(r"\[[^\]]+\]", "", text)
    text = text.replace("转发微博", "")
    text = re.sub(r"\s+", " ", text)
    return text.strip(" 【】\n\t")


def truncate_text(text: str, limit: int = 22) -> str:
    if len(text) <= limit:
        return text
    return text[: limit - 1].rstrip() + "…"


def format_large_number(value: float) -> str:
    value = float(value)
    if value >= 100_000_000:
        return f"{value / 100_000_000:.1f}亿"
    if value >= 10_000:
        return f"{value / 10_000:.1f}万"
    return f"{value:,.0f}"


def load_dataset() -> pd.DataFrame:
    df = pd.read_excel(DATA_PATH)
    df["created_at"] = pd.to_datetime(df["created_at"], errors="coerce")
    df = df[df["created_at"].notna()].copy()
    df["total_engagement"] = df["like_num"] + df["repost_num"] + df["comment_num"]
    df["date"] = df["created_at"].dt.normalize()
    df["month"] = df["created_at"].dt.to_period("M").dt.to_timestamp()
    df["hour"] = df["created_at"].dt.hour
    weekday_map = {
        0: "周一",
        1: "周二",
        2: "周三",
        3: "周四",
        4: "周五",
        5: "周六",
        6: "周日",
    }
    df["weekday"] = df["created_at"].dt.weekday.map(weekday_map)
    df["content_clean"] = df["content"].map(clean_text)
    return df


def apply_axis_polish(ax: plt.Axes) -> None:
    ax.spines["left"].set_color("#cbd5e1")
    ax.spines["bottom"].set_color("#cbd5e1")
    ax.tick_params(labelsize=10)


def save_figure(fig: plt.Figure, filename: str) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    fig.savefig(OUTPUT_DIR / filename, dpi=220)
    plt.close(fig)


def make_dashboard(df: pd.DataFrame) -> None:
    fig = plt.figure(figsize=(18, 10.5))
    gs = fig.add_gridspec(3, 4, height_ratios=[0.78, 1.25, 1.25], hspace=0.34, wspace=0.28)

    colors = ["#2563eb", "#0f766e", "#d97706", "#dc2626"]
    metrics = [
        ("总微博数", format_large_number(len(df)), f"{df['created_at'].min():%Y.%m} - {df['created_at'].max():%Y.%m}"),
        ("平均单条互动", format_large_number(df["total_engagement"].mean()), "点赞 + 转发 + 评论"),
        ("峰值单条互动", format_large_number(df["total_engagement"].max()), "真实微博样本中的最高值"),
        ("最常用发布来源", df["source"].value_counts().index[0], format_large_number(df["source"].value_counts().iloc[0])),
    ]

    for i, (title, value, note) in enumerate(metrics):
        ax = fig.add_subplot(gs[0, i])
        ax.set_axis_off()
        card = FancyBboxPatch(
            (0, 0),
            1,
            1,
            transform=ax.transAxes,
            boxstyle="round,pad=0.015,rounding_size=24",
            facecolor="#ffffff",
            edgecolor=colors[i],
            linewidth=2.2,
        )
        ax.add_patch(card)
        ax.text(0.08, 0.73, title, transform=ax.transAxes, fontsize=12, color="#475569", fontweight="bold")
        ax.text(0.08, 0.42, value, transform=ax.transAxes, fontsize=22, color="#0f172a", fontweight="bold")
        ax.text(0.08, 0.16, note, transform=ax.transAxes, fontsize=10.5, color="#64748b")

    monthly_posts = df.groupby("month").size()
    rolling_posts = monthly_posts.rolling(3, min_periods=1).mean()
    ax1 = fig.add_subplot(gs[1, :2])
    ax1.plot(monthly_posts.index, monthly_posts.values, color="#93c5fd", linewidth=1.4, alpha=0.9)
    ax1.plot(rolling_posts.index, rolling_posts.values, color="#2563eb", linewidth=2.8)
    ax1.fill_between(monthly_posts.index, monthly_posts.values, color="#bfdbfe", alpha=0.35)
    ax1.set_title("月度发文趋势", fontsize=15, fontweight="bold", loc="left")
    ax1.set_ylabel("发文数量")
    ax1.xaxis.set_major_locator(mdates.YearLocator(base=2))
    ax1.xaxis.set_major_formatter(mdates.DateFormatter("%Y"))
    apply_axis_polish(ax1)

    source_top = df["source"].value_counts().head(8).sort_values()
    ax2 = fig.add_subplot(gs[1, 2:])
    bars = ax2.barh(source_top.index, source_top.values, color=sns.color_palette("crest", len(source_top)))
    ax2.set_title("发布来源 TOP 8", fontsize=15, fontweight="bold", loc="left")
    ax2.set_xlabel("微博数量")
    apply_axis_polish(ax2)
    for bar, value in zip(bars, source_top.values):
        ax2.text(value + source_top.max() * 0.01, bar.get_y() + bar.get_height() / 2, format_large_number(value), va="center", fontsize=10)

    heatmap_data = (
        df.pivot_table(index="weekday", columns="hour", values="_id", aggfunc="count")
        .reindex(["周一", "周二", "周三", "周四", "周五", "周六", "周日"])
        .fillna(0)
    )
    ax3 = fig.add_subplot(gs[2, :2])
    sns.heatmap(
        heatmap_data,
        cmap=sns.light_palette("#2563eb", as_cmap=True),
        ax=ax3,
        cbar=False,
        linewidths=0.5,
        linecolor="#e2e8f0",
    )
    ax3.set_title("一周 24 小时发文热力图", fontsize=15, fontweight="bold", loc="left")
    ax3.set_xlabel("小时")
    ax3.set_ylabel("")

    ax4 = fig.add_subplot(gs[2, 2:])
    metric_means = pd.Series(
        {
            "点赞": df["like_num"].mean(),
            "转发": df["repost_num"].mean(),
            "评论": df["comment_num"].mean(),
            "总互动": df["total_engagement"].mean(),
        }
    )
    palette = ["#2563eb", "#0ea5e9", "#10b981", "#f97316"]
    bars = ax4.bar(metric_means.index, metric_means.values, color=palette, width=0.58)
    ax4.set_title("单条微博平均互动结构", fontsize=15, fontweight="bold", loc="left")
    ax4.set_ylabel("平均值")
    apply_axis_polish(ax4)
    for bar, value in zip(bars, metric_means.values):
        ax4.text(bar.get_x() + bar.get_width() / 2, value, f"{value:,.0f}", ha="center", va="bottom", fontsize=10)

    fig.suptitle("央广网微博数据分析仪表板", fontsize=24, fontweight="bold", x=0.05, y=0.985, ha="left")
    fig.text(0.05, 0.945, "真实微博样本 110,709 条，展示发文节奏、发布来源与互动结构。", fontsize=12, color="#64748b")
    save_figure(fig, "analysis-dashboard.png")


def make_time_series(df: pd.DataFrame) -> None:
    fig, axes = plt.subplots(2, 2, figsize=(18, 10))
    fig.subplots_adjust(hspace=0.34, wspace=0.22, top=0.88)

    monthly_posts = df.groupby("month").size()
    monthly_rolling = monthly_posts.rolling(6, min_periods=1).mean()
    ax = axes[0, 0]
    ax.plot(monthly_posts.index, monthly_posts.values, color="#94a3b8", linewidth=1.2, alpha=0.8)
    ax.plot(monthly_rolling.index, monthly_rolling.values, color="#2563eb", linewidth=2.8)
    ax.fill_between(monthly_posts.index, monthly_posts.values, color="#dbeafe", alpha=0.45)
    ax.set_title("月度发文趋势（6 个月平滑）", fontsize=15, fontweight="bold", loc="left")
    ax.xaxis.set_major_locator(mdates.YearLocator(base=2))
    ax.xaxis.set_major_formatter(mdates.DateFormatter("%Y"))
    ax.set_ylabel("发文数量")
    apply_axis_polish(ax)

    hourly_posts = df.groupby("hour").size().reindex(range(24), fill_value=0)
    ax = axes[0, 1]
    bars = ax.bar(hourly_posts.index, hourly_posts.values, color="#0ea5e9", alpha=0.88)
    ax.set_title("24 小时发文分布", fontsize=15, fontweight="bold", loc="left")
    ax.set_xlabel("小时")
    ax.set_ylabel("发文数量")
    ax.set_xticks(range(0, 24, 2))
    apply_axis_polish(ax)
    highlight_hour = int(hourly_posts.idxmax())
    bars[highlight_hour].set_color("#f97316")

    heatmap_data = (
        df.pivot_table(index="weekday", columns="hour", values="_id", aggfunc="count")
        .reindex(["周一", "周二", "周三", "周四", "周五", "周六", "周日"])
        .fillna(0)
    )
    ax = axes[1, 0]
    sns.heatmap(
        heatmap_data,
        cmap=sns.light_palette("#0f766e", as_cmap=True),
        ax=ax,
        cbar=False,
        linewidths=0.5,
        linecolor="#e2e8f0",
    )
    ax.set_title("工作日与时段热力图", fontsize=15, fontweight="bold", loc="left")
    ax.set_xlabel("小时")
    ax.set_ylabel("")

    daily_engagement = df.groupby("date")["total_engagement"].mean().rolling(30, min_periods=7).mean()
    recent = daily_engagement.tail(365)
    ax = axes[1, 1]
    ax.plot(recent.index, recent.values, color="#10b981", linewidth=2.5)
    ax.fill_between(recent.index, recent.values, color="#bbf7d0", alpha=0.35)
    ax.set_title("近一年单条平均互动趋势（30 日平滑）", fontsize=15, fontweight="bold", loc="left")
    ax.xaxis.set_major_locator(mdates.MonthLocator(interval=2))
    ax.xaxis.set_major_formatter(mdates.DateFormatter("%Y-%m"))
    ax.tick_params(axis="x", rotation=45)
    ax.set_ylabel("平均互动")
    apply_axis_polish(ax)

    fig.suptitle("微博发文节奏与时间模式", fontsize=24, fontweight="bold", x=0.05, y=0.98, ha="left")
    fig.text(0.05, 0.935, "把“什么时候发、什么时候容易集中更新”做成学生能读懂的时序图。", fontsize=12, color="#64748b")
    save_figure(fig, "time-series-analysis.png")


def make_engagement_distribution(df: pd.DataFrame) -> None:
    fig, axes = plt.subplots(2, 2, figsize=(18, 10))
    fig.subplots_adjust(hspace=0.34, wspace=0.24, top=0.88)

    series_config = [
        ("点赞", "like_num", "#2563eb"),
        ("转发", "repost_num", "#f97316"),
        ("评论", "comment_num", "#10b981"),
    ]
    for ax, (label, column, color) in zip(axes.flat[:3], series_config):
        clipped = df[column].clip(upper=df[column].quantile(0.99))
        sns.histplot(clipped, bins=45, kde=True, ax=ax, color=color, alpha=0.82, edgecolor=None)
        ax.set_title(f"{label}分布（截取 99 分位）", fontsize=15, fontweight="bold", loc="left")
        ax.set_xlabel(f"{label}数")
        ax.set_ylabel("微博数量")
        apply_axis_polish(ax)

    ax = axes[1, 1]
    quantiles = df["total_engagement"].quantile([0.5, 0.75, 0.9, 0.95, 0.99])
    labels = ["50%", "75%", "90%", "95%", "99%"]
    bars = ax.bar(labels, quantiles.values, color=["#cbd5e1", "#93c5fd", "#60a5fa", "#2563eb", "#1d4ed8"], width=0.62)
    ax.set_title("总互动分位数对比", fontsize=15, fontweight="bold", loc="left")
    ax.set_ylabel("互动总数")
    apply_axis_polish(ax)
    for bar, value in zip(bars, quantiles.values):
        ax.text(bar.get_x() + bar.get_width() / 2, value, f"{value:,.0f}", ha="center", va="bottom", fontsize=10)

    fig.suptitle("微博互动分布特征", fontsize=24, fontweight="bold", x=0.05, y=0.98, ha="left")
    fig.text(0.05, 0.935, "用真实数据展示“长尾分布”是什么样，方便学生把统计现象写进报告。", fontsize=12, color="#64748b")
    save_figure(fig, "engagement-distribution.png")


def make_top_posts_ranking(df: pd.DataFrame) -> None:
    top_posts = df.nlargest(12, "total_engagement").sort_values("total_engagement")
    labels = []
    for _, row in top_posts.iterrows():
        line1 = f"{row['created_at']:%Y-%m-%d} | {truncate_text(row['content_clean'], 26)}"
        line2 = f"赞 {format_large_number(row['like_num'])}  转 {format_large_number(row['repost_num'])}  评 {format_large_number(row['comment_num'])}"
        labels.append(f"{line1}\n{line2}")

    fig, ax = plt.subplots(figsize=(18, 10.5))
    colors = sns.color_palette("blend:#bfdbfe,#2563eb", n_colors=len(top_posts))
    bars = ax.barh(labels, top_posts["total_engagement"], color=colors, height=0.72)
    ax.set_title("高互动微博 TOP 12", fontsize=24, fontweight="bold", loc="left", pad=18)
    ax.text(0, 1.02, "将原始微博文本、发布时间和互动指标压缩成可直接汇报的排行图。", transform=ax.transAxes, fontsize=12, color="#64748b")
    ax.set_xlabel("总互动数")
    ax.xaxis.set_major_formatter(FuncFormatter(lambda x, _: format_large_number(x)))
    apply_axis_polish(ax)

    max_value = top_posts["total_engagement"].max()
    for bar, value in zip(bars, top_posts["total_engagement"]):
        ax.text(value + max_value * 0.012, bar.get_y() + bar.get_height() / 2, format_large_number(value), va="center", fontsize=10.5, fontweight="bold")

    ax.grid(axis="y", visible=False)
    save_figure(fig, "top-posts-ranking.png")


def main() -> None:
    setup_style()
    df = load_dataset()
    make_dashboard(df)
    make_time_series(df)
    make_engagement_distribution(df)
    make_top_posts_ranking(df)
    print(f"Saved visuals to {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
