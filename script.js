/* ============================================================
   Personal Blog — Pure JavaScript
   ============================================================ */

// ——— Sample Post Data ———
const POSTS = [
  {
    id: 1,
    title: "用纯原生 HTML/CSS/JS 构建个人博客",
    category: "技术",
    date: "2024-11-20",
    tags: ["HTML", "CSS", "JavaScript"],
    excerpt: "不借助任何框架，只用浏览器原生技术打造一个美观、响应式的个人博客，探索 Web 最纯粹的一面。",
    content: `
      <p>在框架横行的今天，回归原生 Web 技术是一种别样的乐趣。本文记录了这个博客从零到一的过程。</p>

      <h2>为什么选择原生技术？</h2>
      <p>选择纯 HTML、CSS 和 JS 的理由很简单：</p>
      <ul>
        <li>零依赖，加载飞快</li>
        <li>深入理解浏览器工作原理</li>
        <li>代码易于维护，无需担心框架升级</li>
      </ul>

      <h2>CSS 变量与主题切换</h2>
      <p>通过 CSS 自定义属性（变量），可以轻松实现亮色/暗色主题切换：</p>
      <pre><code>:root {
  --bg: #f7f8fc;
  --accent: #4f46e5;
}
[data-theme="dark"] {
  --bg: #0f172a;
  --accent: #818cf8;
}</code></pre>
      <p>JavaScript 只需切换 <code>data-theme</code> 属性即可完成主题切换，无需任何额外样式。</p>

      <h2>单页应用思路</h2>
      <p>通过显示/隐藏不同的 <code>&lt;section&gt;</code> 元素来模拟路由，无需 History API 或第三方路由库，简单而有效。</p>

      <blockquote>简单不是简陋，而是去除一切不必要的复杂。</blockquote>

      <h2>总结</h2>
      <p>纯原生技术同样可以打造出现代感十足的博客。希望这篇文章能给你带来灵感！</p>
    `
  },
  {
    id: 2,
    title: "CSS Grid 布局完全指南",
    category: "技术",
    date: "2024-10-15",
    tags: ["CSS", "布局", "前端"],
    excerpt: "CSS Grid 是二维布局利器，掌握它可以轻松实现各种复杂页面布局，本文带你从零系统学习。",
    content: `
      <p>CSS Grid Layout 是 CSS 中最强大的布局工具之一，让复杂的二维布局变得优雅而简洁。</p>

      <h2>基础概念</h2>
      <p>Grid 布局涉及两个核心角色：<strong>Grid 容器</strong> 和 <strong>Grid 子项</strong>。</p>

      <h2>创建一个简单的 Grid</h2>
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}</code></pre>
      <p>以上代码创建了一个三列等宽的网格，列间距为 <code>1rem</code>。</p>

      <h2>响应式 Grid</h2>
      <p>利用 <code>auto-fill</code> 和 <code>minmax</code>，可以在不写 media query 的情况下实现响应式布局：</p>
      <pre><code>grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));</code></pre>

      <h2>命名区域</h2>
      <p>Grid 支持通过 <code>grid-template-areas</code> 命名布局区域，让代码更具语义性：</p>
      <pre><code>grid-template-areas:
  "header header"
  "sidebar main"
  "footer footer";</code></pre>

      <blockquote>CSS Grid 让我第一次觉得，"用 CSS 做布局"是一件让人愉悦的事。</blockquote>
    `
  },
  {
    id: 3,
    title: "深秋的一个傍晚",
    category: "生活",
    date: "2024-09-08",
    tags: ["随笔", "生活"],
    excerpt: "落叶铺满小路，空气里有一丝寒意，却正是思考与沉淀的好时机。记录一个普通傍晚的所思所感。",
    content: `
      <p>今天下班早，趁着天还没黑透，在小区附近散了一会儿步。</p>
      <p>深秋的树叶已经落了大半，踩上去发出沙沙的声响，像是在低声讲述夏天的故事。阳光斜斜地打在树梢，金黄和橙红交织在一起，美得有点不真实。</p>

      <h2>慢下来</h2>
      <p>我们总是很忙。忙着工作，忙着刷手机，忙着焦虑。却很少给自己一个傍晚，什么都不做，只是走走，看看。</p>
      <p>今天这一个小时，是久违的平静。</p>

      <h2>一些想法</h2>
      <p>人生其实不需要太多，一份喜欢的工作，几个真心的朋友，和偶尔这样安静的傍晚，已经足够好了。</p>

      <blockquote>生活不止眼前的代码，还有远处的落日和脚下的落叶。</blockquote>
    `
  },
  {
    id: 4,
    title: "JavaScript 异步编程演进史",
    category: "技术",
    date: "2024-08-22",
    tags: ["JavaScript", "异步", "Promise"],
    excerpt: "从回调地狱到 async/await，JavaScript 的异步编程经历了翻天覆地的变化。本文梳理这一演进历程。",
    content: `
      <p>异步是 JavaScript 的灵魂。理解它的演进历程，有助于我们写出更优雅的代码。</p>

      <h2>第一阶段：回调函数</h2>
      <p>最初，JavaScript 用回调函数处理异步操作：</p>
      <pre><code>fetchData(url, function(err, data) {
  if (err) handleError(err);
  process(data, function(err, result) {
    // 回调地狱…
  });
});</code></pre>

      <h2>第二阶段：Promise</h2>
      <p>ES6 引入 Promise，链式调用让代码更线性：</p>
      <pre><code>fetchData(url)
  .then(data => process(data))
  .then(result => save(result))
  .catch(err => handleError(err));</code></pre>

      <h2>第三阶段：async / await</h2>
      <p>ES2017 的 <code>async/await</code> 让异步代码几乎和同步代码一样直观：</p>
      <pre><code>async function main() {
  try {
    const data = await fetchData(url);
    const result = await process(data);
    await save(result);
  } catch (err) {
    handleError(err);
  }
}</code></pre>

      <blockquote>每一次演进都是对开发者体验的尊重。</blockquote>
    `
  },
  {
    id: 5,
    title: "我的 2024 年度阅读清单",
    category: "读书",
    date: "2024-07-10",
    tags: ["读书", "推荐"],
    excerpt: "分享今年读过的几本好书，涵盖技术、人文与哲学，每一本都有所收获。",
    content: `
      <p>读书是最便宜的旅行。今年读完的书不算多，但每一本都留下了痕迹。</p>

      <h2>技术类</h2>
      <ul>
        <li><strong>《代码整洁之道》</strong> — 让我重新审视自己的编码习惯</li>
        <li><strong>《你不知道的 JavaScript》</strong> — 深入理解 JS 的必读之作</li>
      </ul>

      <h2>人文类</h2>
      <ul>
        <li><strong>《活着》</strong> — 余华用平静的文字讲述了最沉重的故事</li>
        <li><strong>《百年孤独》</strong> — 魔幻现实主义的极致，读完久久难以释怀</li>
      </ul>

      <h2>思维与认知</h2>
      <ul>
        <li><strong>《思考，快与慢》</strong> — 了解大脑如何做决策，受益匪浅</li>
      </ul>

      <blockquote>好的书不只给你知识，还给你看世界的新角度。</blockquote>

      <p>2025 年，继续读书，继续记录。</p>
    `
  }
];

// ——— State ———
let activeCategory = null;
let activeTag = null;
let searchQuery = "";

// ——— DOM Helpers ———
function $(id) { return document.getElementById(id); }
function show(id) { $(id).classList.remove("hidden"); }
function hide(id) { $(id).classList.add("hidden"); }

// ——— Page Router ———
function showPage(page) {
  hide("page-home");
  hide("page-post");
  hide("page-about");
  show("page-" + page);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ——— Theme ———
function toggleTheme() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
  $("themeToggle").textContent = isDark ? "🌙" : "☀️";
  localStorage.setItem("theme", isDark ? "light" : "dark");
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
  $("themeToggle").textContent = theme === "dark" ? "☀️" : "🌙";
}

// ——— Search ———
function handleSearch() {
  searchQuery = $("searchInput").value.trim().toLowerCase();
  activeCategory = null;
  activeTag = null;
  renderSidebar();
  renderPosts();
}

// ——— Filtering ———
function filteredPosts() {
  return POSTS.filter(post => {
    const matchSearch = !searchQuery ||
      post.title.toLowerCase().includes(searchQuery) ||
      post.excerpt.toLowerCase().includes(searchQuery) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery));
    const matchCat = !activeCategory || post.category === activeCategory;
    const matchTag = !activeTag || post.tags.includes(activeTag);
    return matchSearch && matchCat && matchTag;
  });
}

// ——— Render Posts ———
function renderPosts() {
  const list = $("postList");
  const noResult = $("noResult");
  const posts = filteredPosts();

  list.innerHTML = "";

  if (posts.length === 0) {
    noResult.classList.remove("hidden");
    return;
  }
  noResult.classList.add("hidden");

  posts.forEach((post, index) => {
    const card = document.createElement("div");
    card.className = "post-card";
    card.style.animationDelay = (index * 0.06) + "s";
    card.innerHTML = `
      <span class="post-card-category">${escHtml(post.category)}</span>
      <h2>${escHtml(post.title)}</h2>
      <p class="post-card-excerpt">${escHtml(post.excerpt)}</p>
      <div class="post-card-footer">
        <span class="post-meta">📅 ${escHtml(post.date)}</span>
        <div class="tag-list">
          ${post.tags.map(t => `<span class="tag${activeTag === t ? " active-tag" : ""}" data-tag="${escHtml(t)}">${escHtml(t)}</span>`).join("")}
        </div>
      </div>
    `;
    // Click on card → open post
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("tag")) {
        e.stopPropagation();
        filterByTag(e.target.dataset.tag);
      } else {
        openPost(post.id);
      }
    });
    list.appendChild(card);
  });
}

// ——— Open Single Post ———
function openPost(id) {
  const post = POSTS.find(p => p.id === id);
  if (!post) return;
  const detail = $("postDetail");
  // post.content is intentionally rendered as HTML to support rich formatting
  // (headings, code blocks, blockquotes). It is static, hardcoded data defined
  // in this file and is never sourced from user input or external APIs.
  // All dynamic interpolations (title, date, category, tags) are HTML-escaped
  // via escHtml() before insertion.
  detail.innerHTML = `
    <h1>${escHtml(post.title)}</h1>
    <div class="post-meta">
      📅 ${escHtml(post.date)} &nbsp;·&nbsp; 🗂️ ${escHtml(post.category)}
      &nbsp;·&nbsp;
      ${post.tags.map(t => `<span class="tag">${escHtml(t)}</span>`).join(" ")}
    </div>
    <div class="post-content">${post.content}</div>
  `;
  showPage("post");
}

// ——— Sidebar: Categories & Tags ———
function renderSidebar() {
  renderCategories();
  renderTagCloud();
}

function renderCategories() {
  const catMap = {};
  POSTS.forEach(p => { catMap[p.category] = (catMap[p.category] || 0) + 1; });
  const ul = $("categoryList");
  ul.innerHTML = "";

  // "All" option
  const allLi = document.createElement("li");
  allLi.className = activeCategory === null ? "active-category" : "";
  allLi.innerHTML = `<span>全部文章</span><span class="cat-count">${POSTS.length}</span>`;
  allLi.addEventListener("click", () => filterByCategory(null));
  ul.appendChild(allLi);

  Object.entries(catMap).forEach(([cat, count]) => {
    const li = document.createElement("li");
    li.className = activeCategory === cat ? "active-category" : "";
    li.innerHTML = `<span>${escHtml(cat)}</span><span class="cat-count">${count}</span>`;
    li.addEventListener("click", () => filterByCategory(cat));
    ul.appendChild(li);
  });
}

function renderTagCloud() {
  const tagSet = new Set();
  POSTS.forEach(p => p.tags.forEach(t => tagSet.add(t)));
  const cloud = $("tagCloud");
  cloud.innerHTML = "";
  tagSet.forEach(tag => {
    const span = document.createElement("span");
    span.className = "tag" + (activeTag === tag ? " active-tag" : "");
    span.textContent = tag;
    span.addEventListener("click", () => filterByTag(tag));
    cloud.appendChild(span);
  });
}

// ——— Filter Actions ———
function filterByCategory(cat) {
  activeCategory = cat;
  activeTag = null;
  $("searchInput").value = "";
  searchQuery = "";
  renderSidebar();
  renderPosts();
  showPage("home");
}

function filterByTag(tag) {
  activeTag = activeTag === tag ? null : tag;
  activeCategory = null;
  $("searchInput").value = "";
  searchQuery = "";
  renderSidebar();
  renderPosts();
  showPage("home");
}

// ——— Security: escape HTML ———
function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ——— Init ———
(function init() {
  initTheme();
  renderPosts();
  renderSidebar();
})();
