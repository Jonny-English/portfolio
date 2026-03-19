<div align="center">

# 对话即存在

*这个网站会开口说话。这很重要。*

</div>

---

大多数个人网站是一面镜子——光滑、静止、只映照你已经准备好展示的部分。
我想要一扇窗口。或者更准确地说，一扇门。

这个项目模仿对话，因为我相信真正的认识从来不是单向的。
你输入 `/about`，它回应你。不是简历，不是推销词，是一个声音。
一个在漫长的调试夜晚和无数次重构之后，仍然选择坐下来，
把自己的存在编写成代码的人的声音。

互联网是喧嚣的。每一个像素都在争夺注意力。
这里不争。它等待。

---

## 技术构成

```
Next.js 15        —   应用骨架
Tailwind CSS v4   —   视觉语言
TypeScript        —   思维的纪律
```

这些技术本身不重要。重要的是它们足够安静，
让内容说话，而不是让框架表演。

---

## 快速开始

工具不应该成为障碍。

```bash
git clone https://github.com/Jonny-English/portfolio.git
cd portfolio
npm install
npm run dev
```

访问 `http://localhost:3000`。

在首页的输入框中，试试这些指令：

| 指令 | 回应 |
|------|------|
| `/about` | 关于这个人 |
| `/projects` | 他做过的事 |
| `/writing` | 他思考过的事 |
| `/help` | 如果你迷路了 |

---

## 目录结构

```
src/
├── app/                  # 页面与全局样式
│   ├── globals.css       # 设计语言的根源
│   ├── layout.tsx        # 骨架
│   └── page.tsx          # 首页 — 对话在这里发生
│
├── components/
│   ├── content/          # 内容呈现层 (AboutCard, ProjectList...)
│   ├── features/         # 核心交互 (ChatFeed, Sidebar...)
│   └── ui/               # 基础组件 — 最小的、最可复用的
│
├── data/                 # 内容的居所
│   ├── profile.ts        # 你是谁
│   ├── projects.ts       # 你做过什么
│   └── writing.ts        # 你想过什么
│
├── hooks/
│   └── useCommander.ts   # 指令的大脑 — 读懂输入，决定回应
│
└── lib/                  # 工具函数 — 无声的劳工
```

---

## 如何变成你自己的

代码是骨架，内容是灵魂。改变以下文件，这个网站就会开始说你的故事。

**你是谁**
```
src/data/profile.ts
```
名字、简介、现在在做什么、如何联系你。

**你做过什么**
```
src/data/projects.ts
```
每一个项目都是一次决策的记录。诚实地写它。

**你想过什么**
```
src/data/writing.ts
```
文章的元数据与内容。如果你有话要说，这里是地方。

**它看起来如何**
```
src/app/globals.css
```
CSS 变量控制颜色、字体、间距。默认使用 `Inter`（无衬线）和 `Newsreader`（衬线）——
一个用于界面，一个用于阅读。二者之间有意为之的张力。

---

## 部署

```bash
# 推送到 GitHub，然后在 Vercel 导入
# 零配置。三次点击。
```

这个项目为 Vercel 优化。没有服务器需要管理，没有基础设施需要维护。
专注于内容，其他的交给边缘节点。

如果你偏好其他平台：Next.js 的静态导出在任何主机上都能运行。

---

## 延伸的可能

**接入真实的 AI**
`useCommander.ts` 目前是规则引擎。把它替换为 Vercel AI SDK 的流式调用，
对话就会变得真正开放——你不再知道它会说什么，访客也不会。

**连接内容系统**
`data/` 目录可以替换为 Contentful、Sanity、或任何 headless CMS 的 API 调用。
内容从代码中分离，就像思想从形式中分离一样，是一种成熟。

**加入分析**
Vercel Analytics 可以告诉你人们在哪里停留，在哪里离开。
但要小心。有些问题，数据回答不了。

---

<div align="center">

MIT License · 2026

*写代码是一种孤独的手艺。但如果有人在另一端打开这扇门，*
*那就不那么孤独了。*

</div>

---

---

<div align="center">

# Existence as Dialogue

*This website speaks. That matters.*

</div>

---

Most personal websites are mirrors — smooth, still, reflecting only what you've decided to show.
I wanted a window. Or more precisely, a door.

This project simulates conversation because I believe genuine understanding is never one-directional.
You type `/about`, it responds. Not a resume. Not a sales pitch. A voice.
The voice of someone who, after long debugging nights and countless refactors,
still chose to sit down and write their existence into code.

The internet is loud. Every pixel competes for attention.
This one doesn't compete. It waits.

---

## The Stack

```
Next.js 15        —   the skeleton
Tailwind CSS v4   —   the visual language
TypeScript        —   the discipline of thought
```

The specific technologies don't matter much.
What matters is that they're quiet enough to let content speak,
rather than letting the framework perform.

---

## Getting Started

Tools should not become obstacles.

```bash
git clone https://github.com/Jonny-English/portfolio.git
cd portfolio
npm install
npm run dev
```

Open `http://localhost:3000`.

In the input field on the homepage, try these commands:

| Command | Response |
|---------|----------|
| `/about` | Who this person is |
| `/projects` | What they've built |
| `/writing` | What they've thought about |
| `/help` | If you're lost |

---

## Project Structure

```
src/
├── app/                  # Pages and global styles
│   ├── globals.css       # The roots of the design language
│   ├── layout.tsx        # The frame
│   └── page.tsx          # The homepage — where conversation happens
│
├── components/
│   ├── content/          # Content presentation layer
│   ├── features/         # Core interactions (ChatFeed, Sidebar...)
│   └── ui/               # Base components — the smallest, most reusable
│
├── data/                 # Where content lives
│   ├── profile.ts        # Who you are
│   ├── projects.ts       # What you've built
│   └── writing.ts        # What you've thought
│
├── hooks/
│   └── useCommander.ts   # The intelligence behind commands
│
└── lib/                  # Utility functions — the quiet labor
```

---

## Making It Yours

Code is skeleton. Content is soul. Change these files and the website begins telling your story.

**Who you are**
```
src/data/profile.ts
```
Your name, bio, what you're working on now, how to reach you.

**What you've built**
```
src/data/projects.ts
```
Each project is a record of a decision. Write it honestly.

**What you've thought**
```
src/data/writing.ts
```
Article metadata and content. If you have something to say, this is where you say it.

**How it looks**
```
src/app/globals.css
```
CSS variables control color, typography, spacing. The defaults use `Inter` (sans-serif)
and `Newsreader` (serif) — one for interface, one for reading. The tension between them
is intentional.

---

## Deployment

```bash
# Push to GitHub, then import to Vercel.
# Zero configuration. Three clicks.
```

This project is optimized for Vercel. No servers to manage, no infrastructure to maintain.
Focus on the content. Let the edge nodes handle the rest.

For other platforms: Next.js static export runs on any host.

---

## What This Could Become

**Real AI**
`useCommander.ts` is currently a rule engine. Replace it with a streaming call
via the Vercel AI SDK and the conversation becomes genuinely open —
you no longer know what it will say. Neither will your visitors.

**A Real CMS**
The `data/` directory can be replaced with API calls to Contentful, Sanity,
or any headless CMS. Separating content from code, like separating thought from form,
is a kind of maturity.

**Analytics**
Vercel Analytics can show you where people linger, where they leave.
But be careful. Some questions, data cannot answer.

---

<div align="center">

MIT License · 2026

*Writing code is a solitary craft. But if someone opens this door on the other end,*
*it becomes a little less so.*

</div>
