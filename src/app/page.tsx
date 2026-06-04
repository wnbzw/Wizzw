import TypewriterName from "@/components/TypewriterName";

const navItems = [
  { index: "01", label: "首页", href: "#" },
  { index: "02", label: "实习", href: "#experience" },
  { index: "03", label: "项目", href: "#projects" },
  { index: "04", label: "技能", href: "#skills" },
  { index: "05", label: "联系", href: "#contact" },
];

const siteBasePath = process.env.GITHUB_ACTIONS ? "/Wizzw" : "";
const resumeHref = `${siteBasePath}/resume.pdf`;

const experiences = [
  {
    role: "后端开发",
    company: "小米科技（武汉）有限公司 · 国际服务研发部",
    period: "2025.09 — 2026.01",
    points: [
      {
        title: "全链路日志追踪",
        body: "完成后端服务全链路日志追踪体系配置，通过 traceId 实现高效错误分析，问题定位效率提升 20%。",
      },
      {
        title: "分布式事务方案",
        body: "独立设计并实现售后反冲单模块，基于 RocketMQ 事务消息解决本地 DB 操作与远程库存调用的分布式事务问题，通过异步解耦和幂等机制提升系统可扩展性。",
      },
      {
        title: "接口性能优化",
        body: "运用 CompletableFuture 并结合 Redis 缓存技术，深度优化服务 Top3 接口性能，接口 P99 耗时从 5s 缩短至 3s，用户体验显著提升。",
      },
      {
        title: "大数据量导出优化",
        body: "采用分批查询机制处理大数据量工单导出，结合并行 Dubbo 远程调用实现多服务数据聚合，有效降低数据库压力并提升系统响应效率。",
      },
      {
        title: "生产问题排查",
        body: "借助 AI 定位并修复生产环境线程池泄露问题，通过 JVM 堆栈分析与生命周期重构，将系统常驻线程数降低 75%，消除 CPU Load 异常波动。",
      },
    ],
  },
  {
    role: "后端实习生",
    company: "苏州汇川技术有限公司 · 流程数据与IT部",
    period: "2025.06 — 2025.08",
    points: [
      {
        title: "异常监控告警",
        body: "基于飞书 API 与 Logback 实现多环境（测试/生产）异常监控告警机制，自动推送错误详情至飞书机器人以加速问题响应。",
      },
      {
        title: "ERP 数据同步",
        body: "实现基于 RabbitMQ 的多类型 ERP 数据同步机制，通过 Redisson 分布式锁与重试策略保障消息幂等性，实现业务数据向登记表的可靠同步。",
      },
      {
        title: "结算单需求开发",
        body: "设计高精度结算引擎（20+ 类金额计算），并在审批流程节点完成后触发事件，通过飞书异步通知推进流程，实现审批流转时效提升 65%，人工查询减少 90%。",
      },
      {
        title: "SQL 性能优化",
        body: "通过 Explain 指令优化维修指导价查询逻辑，将 SQL 时间从 30s 优化至 100ms 左右，性能提升 300 倍。",
      },
    ],
  },
];

const projects: {
  name: string;
  tags: string[];
  period: string;
  links: { label: string; href: string }[];
  summary: string;
  points: string[];
}[] = [
  {
    name: "阅听书 — 听书平台系统",
    tags: [
      "Spring Boot",
      "MySQL",
      "ElasticSearch",
      "Redis",
      "RabbitMQ",
      "Gateway",
      "Nacos",
      "JWT",
      "Minio",
    ],
    period: "2025.03 — 2025.06",
    links: [],
    summary:
      "听书平台系统，管理员可以创建专辑并批量上传声音内容；用户可以智能搜索专辑、在线听书并查看播放记录和订阅记录等。",
    points: [
      "基于 Elasticsearch 构建专辑搜索索引，实现支持拼音与首字母的搜索关键词自动补全功能，显著提升用户体验。",
      "使用线程池与 CompletableFuture 实现异步查询优化，显著提升专辑上架、专辑详情页等复杂业务场景的响应性能。",
      "设计并封装自定义缓存 Starter，通过 AOP 与注解统一管理 Redis 缓存逻辑，集成随机过期时间、布隆过滤器与分布式锁，有效防控缓存雪崩、穿透、击穿问题，将专辑详情查询性能从 300ms 优化至 3ms。",
      "借助 Canal 监听 MySQL Binlog，实现专辑数据与 Redis 缓存数据的最终一致性，并且实现缓存双删有效解决缓存与数据库不一致的问题。",
      "针对零钱支付与订单创建等核心场景，通过整合本地消息表与 MQ 事务消息机制，构建高可靠事务保障体系，确保分布式系统数据最终一致性。",
    ],
  },
];

const skillGroups = [
  {
    title: "Java 基础",
    skills: ["集合框架", "多线程", "JUC", "JVM", "设计模式"],
  },
  {
    title: "框架",
    skills: ["Spring", "Spring Boot", "MyBatis", "IOC/AOP"],
  },
  {
    title: "数据库与缓存",
    skills: ["MySQL", "Redis", "ElasticSearch", "事务/索引/MVCC"],
  },
  {
    title: "中间件与工具",
    skills: ["RabbitMQ", "RocketMQ", "Nacos", "Docker", "Git"],
  },
];

function SectionTitle({
  eyebrow,
  title,
}: Readonly<{ eyebrow: string; title: string }>) {
  return (
    <div className="mb-8">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-mono text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#060b12] text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_62%_8%,_rgba(14,165,233,0.12),_transparent_34%),radial-gradient(circle_at_90%_40%,_rgba(20,184,166,0.08),_transparent_28%),linear-gradient(180deg,_rgba(2,6,23,0.25),_rgba(2,6,23,0.9))]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-cyan-200/10 bg-[#070d18]/85 px-9 py-10 shadow-2xl shadow-black/30 backdrop-blur-xl lg:flex lg:flex-col">
        <a href="#" className="font-mono text-lg font-black tracking-tight text-white">
          W<span className="text-cyan-300">Z</span>w
        </a>
        <p className="mt-3 font-mono text-xs text-slate-500">后端开发工程师</p>

        <nav className="mt-20 space-y-6 font-mono text-sm">
          {navItems.map((item) => (
            <a key={item.href} className="group flex items-center gap-4 text-slate-500 transition hover:text-cyan-200" href={item.href}>
              <span className="text-xs text-slate-600 group-hover:text-cyan-400">{item.index}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto space-y-2 font-mono text-xs text-slate-500">
          <a className="block transition hover:text-cyan-200" href="mailto:13597728916@163.com">
            13597728916@163.com
          </a>
          <a className="block transition hover:text-cyan-200" href="https://github.com/wnbzw" target="_blank" rel="noreferrer">
            GitHub / Wizzw
          </a>
        </div>
      </aside>

      <a
        className="fixed right-8 top-8 z-30 hidden rounded-md border border-cyan-200/20 bg-cyan-300/10 px-4 py-2 font-mono text-sm font-semibold text-cyan-100 shadow-[0_0_30px_rgba(103,232,249,0.12)] backdrop-blur transition hover:bg-cyan-300 hover:text-slate-950 lg:inline-flex"
        href={resumeHref}
        download="王志文-后端开发-简历.pdf"
      >
        Download PDF
      </a>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-5 py-6 sm:px-8 lg:ml-64 lg:px-16 xl:px-24">
        <header className="sticky top-4 z-20 mb-16 flex items-center justify-between rounded-full border border-white/10 bg-slate-950/60 px-5 py-3 shadow-2xl shadow-cyan-950/10 backdrop-blur lg:hidden">
          <a href="#" className="font-mono text-sm font-semibold text-white">
            W<span className="text-cyan-300">Z</span>w.Resume
          </a>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            {navItems.map((item) => (
              <a key={item.href} className="transition hover:text-cyan-200" href={item.href}>
                {item.label}
              </a>
            ))}
            <a className="font-semibold text-cyan-200 transition hover:text-cyan-100" href={resumeHref} download="王志文-后端开发-简历.pdf">
              PDF
            </a>
          </nav>
          <a
            className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1.5 font-mono text-xs font-semibold text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950 sm:hidden"
            href={resumeHref}
            download="王志文-后端开发-简历.pdf"
          >
            PDF
          </a>
        </header>

        <section className="grid min-h-[82vh] items-center gap-12 pb-24 pt-8 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 font-mono text-xs font-medium text-emerald-200 shadow-[0_0_28px_rgba(16,185,129,0.12)]">
              ● Java 后端开发 · 小米科技
            </p>
            <h1 className="flex h-24 w-full max-w-[520px] items-center overflow-hidden font-mono text-6xl font-black tracking-[-0.08em] text-white drop-shadow-[0_0_30px_rgba(148,163,184,0.16)] sm:h-28 sm:text-7xl lg:h-32 lg:text-8xl">
              <TypewriterName />
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-400">
              武汉科技大学软件工程本科在读，现于小米国际服务研发部担任后端开发实习生。专注于 Java 后端与分布式系统，熟悉 Spring 全家桶、Redis、MySQL 及消息队列等技术栈。
            </p>
            <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs font-medium">
              {["Java", "Spring Boot", "Redis", "MySQL", "RabbitMQ", "RocketMQ"].map(
                (tag) => (
                  <span key={tag} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-slate-400">
                    {tag}
                  </span>
                ),
              )}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a className="rounded-md bg-cyan-300 px-6 py-3 font-semibold text-slate-950 shadow-[0_0_30px_rgba(103,232,249,0.22)] transition hover:bg-cyan-200" href="#projects">
                查看项目
              </a>
              <a className="rounded-md border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-100" href="mailto:13597728916@163.com">
                联系我
              </a>
            </div>
          </div>
          <aside className="flex justify-start lg:justify-center">
            <div className="w-full max-w-[380px] rounded-xl border border-cyan-200/10 bg-[#0b1220]/72 p-5 shadow-2xl shadow-black/25 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-300/10 text-xl">
                  🎓
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-semibold text-white">武汉科技大学</h2>
                    <span className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-2 py-1 font-mono text-xs font-semibold text-cyan-200">
                      本科
                    </span>
                  </div>
                  <p className="mt-2 font-mono text-sm text-slate-500">
                    软件工程 · 2022.09 — 2026.06
                  </p>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm text-slate-400">
                <p>蓝桥杯 Java B 组国家二等奖</p>
                <p>CET-6</p>
              </div>
            </div>
          </aside>
        </section>

        <section id="experience" className="py-20">
          <SectionTitle eyebrow="Experience" title="实习经历" />
          <div className="space-y-6">
            {experiences.map((item) => (
              <article key={item.company} className="rounded-xl border border-cyan-200/10 bg-[#0b1220]/72 p-6 shadow-2xl shadow-black/20 backdrop-blur">
                <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 md:flex-row">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-2 text-cyan-100">{item.company}</p>
                  </div>
                  <p className="font-mono text-sm text-slate-400">{item.period}</p>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {item.points.map((point, index) => (
                    <div key={point.title} className="rounded-lg border border-white/[0.06] bg-slate-950/45 p-5">
                      <p className="font-mono text-sm text-cyan-300">0{index + 1}</p>
                      <h4 className="mt-3 font-semibold text-white">{point.title}</h4>
                      <p className="mt-3 text-sm leading-7 text-slate-400">{point.body}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="py-20">
          <SectionTitle eyebrow="Projects" title="项目经历" />
          <div className="grid gap-6">
            {projects.map((project) => (
              <article key={project.name} className="rounded-xl border border-cyan-200/10 bg-[#0b1220]/72 p-6 shadow-2xl shadow-black/20 backdrop-blur">
                <div className="flex flex-col justify-between gap-6 lg:flex-row">
                  <div>
                    <p className="font-mono text-sm text-slate-400">{project.period}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{project.name}</h3>
                    <p className="mt-4 max-w-3xl leading-8 text-slate-300">{project.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.links.length > 0 && (
                    <div className="flex shrink-0 flex-wrap items-start gap-3">
                      {project.links.map((link) => (
                        <a key={link.href} className="rounded-md border border-cyan-200/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950" href={link.href} target="_blank" rel="noreferrer">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <ul className="mt-6 grid gap-3 text-sm leading-7 text-slate-400 lg:grid-cols-2">
                  {project.points.map((point) => (
                    <li key={point} className="rounded-lg border border-white/[0.05] bg-slate-950/45 p-4">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="py-20">
          <SectionTitle eyebrow="Skills" title="相关技能" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-xl border border-cyan-200/10 bg-[#0b1220]/72 p-5 shadow-xl shadow-black/10">
                <h3 className="flex items-center gap-2 font-mono text-sm text-slate-500">
                  <span className="text-cyan-400">•</span>
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-md border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-1.5 font-mono text-sm font-semibold text-sky-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer id="contact" className="border-t border-white/10 py-10 text-sm text-slate-400">
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <p>Built with Next.js · Deployed on GitHub Pages</p>
            <div className="flex gap-4">
              <a className="hover:text-cyan-200" href="mailto:13597728916@163.com">
                Email
              </a>
              <a className="hover:text-cyan-200" href="https://github.com/t5uYu" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
