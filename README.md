# Hi, I'm Nick 👋

**Follow along:** I share what breaks (and what fixes it) putting AI agents into production — [**@surlymochan on X**](https://x.com/surlymochan) · [Contra](https://contra.com/chao_chen_p9d4xc5f)

> ⭐ **If OpenFlow or OpenSwarm saves you time, a star is the best way to support the work — I'm pushing for 100 stars this month.**


**AI agents · Harness engineering · Reliable loops & graphs**

I build tools for running coding agents, coordinating their work, and checking what they deliver. My focus is executable workflows, isolated execution, and experiments others can reproduce.

<p><img src="https://komarev.com/ghpvc/?username=surlymochan&label=Profile%20views&color=0e75b6&style=flat" alt="Profile views counter"></p>

## Start Here

- 🌐 **[Phanes](https://github.com/surlymochan/phanes)** — my current flagship: a distributed, heterogeneous, self-evolving agent network. One control plane for goals and acceptance, a unified pool of compute resources, and final acceptance that must cite independent verification — never a worker's self-report. Architecture passed an adversarial multi-model design review; building in stages.
- 🔁 **[OpenFlow](https://github.com/surlymochan/openflow)** — executable delivery workflows for AI coding agents, with YAML phases and evidence gates. [Quickstart](https://github.com/surlymochan/openflow#3-minute-start) · [npm](https://www.npmjs.com/package/@surlymochan/openflow)
- 🐝 **[OpenSwarm](https://github.com/surlymochan/openswarm)** — quota-aware dispatch across coding agents, with isolated git worktrees, time budgets, and host-side verification. [Getting started](https://github.com/surlymochan/openswarm#quickstart)

## Current Projects

### The Unified Agent Network

- **[Phanes](https://github.com/surlymochan/phanes)** is where OpenBot, OpenSwarm, and my RSI (recursive self-improvement) work converge into one system: a single control plane holding agent identity, goals, authorization, and final accept/reject decisions; distributed heterogeneous execution scheduled against a unified resource registry (hosts, backends, models, quotas described separately from agents); and an evidence-driven improvement loop that proposes changes from verified run records. Tasks flow through one versioned contract — Goal → Task → Run/Attempt → Evidence — with idempotent dispatch, so a lost receipt or a restarted worker can never silently run the same attempt twice.

### Harnesses & Delivery Workflows

- **[OpenFlow](https://github.com/surlymochan/openflow)** turns delivery phases and acceptance evidence into an executable workflow. For developers who want to inspect how an agent's result was checked.

### Agent Execution & Orchestration

- **[OpenSwarm](https://github.com/surlymochan/openswarm)** separates planning from execution and routes tasks across Codex, OpenCode, DeepSeek, and opt-in backends. Each task runs in its own worktree with explicit limits.

## Open Source

Recent merged contributions:

- **[oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent/pull/11237)** — persisted Momus review verdicts next to the plan they reviewed.
- **[OpenBot](https://github.com/nightly-labs/openbot/pull/2577)** — read inline triple-backtick code as text in Live Activities.
- **[OpenSpec](https://github.com/Fission-AI/OpenSpec/pull/2120)** — named the configured schema in the new-change progress line.
- **[OpenClaw](https://github.com/openclaw/openclaw/pull/177871)** — preserved compatible reasoning in follow-up requests.

Currently contributing fixes to **[oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent/pulls?q=is%3Apr+author%3Asurlymochan)**, **[OpenBot](https://github.com/nightly-labs/openbot/pulls?q=is%3Apr+author%3Asurlymochan)**, and **[strands-agents/harness-sdk](https://github.com/strands-agents/harness-sdk/pulls?q=is%3Apr+author%3Asurlymochan)**. Open pull requests are proposals, not merged features or maintainer roles.

<details>
<summary>Contribution history & open pull requests</summary>

<!-- CONTRIB:START -->
Merged upstream pull requests: **21** across **14** repositories.

**Apache SkyWalking**

- [skywalking-swck#232](https://github.com/apache/skywalking-swck/pull/232) Bump golang.org/x/net to v0.61.0 in adapter and operator
- [skywalking-mcp#45](https://github.com/apache/skywalking-mcp/pull/45) Bump golang.org/x/text and x/sys to clear govulncheck advisories
- [skywalking-go#258](https://github.com/apache/skywalking-go/pull/258) Bump grpc to v1.83.2 and x/net to v0.58.0 to fix known CVEs
- [skywalking-cli#236](https://github.com/apache/skywalking-cli/pull/236) fix(deps): bump grpc, x/crypto and x/net for known CVEs
- [skywalking-rover#222](https://github.com/apache/skywalking-rover/pull/222) Bump golang.org/x/net to v0.61.0 to fix HTTP/2 CVEs
- [skywalking-infra-e2e#149](https://github.com/apache/skywalking-infra-e2e/pull/149) Bump vulnerable dependencies to patched versions
- [skywalking-goapi#99](https://github.com/apache/skywalking-goapi/pull/99) Bump grpc to v1.84.0 and x/net to v0.57.0
- [skywalking-satellite#289](https://github.com/apache/skywalking-satellite/pull/289) Archive 1.3.0 changelog and start 1.4.0 section
- [skywalking-rover#220](https://github.com/apache/skywalking-rover/pull/220) Bump up grpc to 1.84.0 to fix CVE-2026-33186

**OpenSpec**

- [OpenSpec#2120](https://github.com/Fission-AI/OpenSpec/pull/2120) fix(new-change): name the configured schema in the progress line
- [OpenSpec#2116](https://github.com/Fission-AI/OpenSpec/pull/2116) perf(cli): load ora only when a spinner is shown
- [OpenSpec#2114](https://github.com/Fission-AI/OpenSpec/pull/2114) fix(verify): match REMOVED baselines by exact normalized name
- [OpenSpec#2103](https://github.com/Fission-AI/OpenSpec/pull/2103) fix(security): replace fast-glob with tinyglobby to drop braces

**nightly-labs/openbot**

- [openbot#2577](https://github.com/nightly-labs/openbot/pull/2577) Read inline triple-backtick code as text in Live Activities
- [openbot#2576](https://github.com/nightly-labs/openbot/pull/2576) Keep emoji whole when a Live Activity cuts a code span
- [openbot#2578](https://github.com/nightly-labs/openbot/pull/2578) Report an MCP sign-in that cannot start

**code-yeongyu/oh-my-openagent**

- [oh-my-openagent#11237](https://github.com/code-yeongyu/oh-my-openagent/pull/11237) feat(hooks): persist Momus review verdicts next to the plan
- [oh-my-openagent#11228](https://github.com/code-yeongyu/oh-my-openagent/pull/11228) fix(omo-senpi): make init-deep committed mode self-contained

**infiniflow/ragflow**

- [ragflow#21110](https://github.com/infiniflow/ragflow/pull/21110) fix(web): accept null table_column_* fields in dataset settings form

**modelcontextprotocol/go-sdk**

- [go-sdk#1412](https://github.com/modelcontextprotocol/go-sdk/pull/1412) mcp: parse SSE field values per the SSE spec

**openclaw/openclaw**

- [openclaw#177871](https://github.com/openclaw/openclaw/pull/177871) fix(ai): preserve compatible reasoning in follow-up requests

<details>
<summary>In review (56)</summary>

- [ag-ui-protocol/ag-ui#3241](https://github.com/ag-ui-protocol/ag-ui/pull/3241) fix(client): give interrupts without expiresAt a bounded default expiry
- [ag-ui-protocol/ag-ui#3235](https://github.com/ag-ui-protocol/ag-ui/pull/3235) fix(mastra): stream frontend tool answers under the stored message's continuation id
- [ai-boost/awesome-harness-engineering#345](https://github.com/ai-boost/awesome-harness-engineering/pull/345) Add openflow to Verification & CI Integration
- [ai-for-developers/awesome-ai-coding-tools#1006](https://github.com/ai-for-developers/awesome-ai-coding-tools/pull/1006) Add OpenFlow to Testing and QA
- [anomalyco/opencode#59369](https://github.com/anomalyco/opencode/pull/59369) feat(tui): add an opt-out for the Kitty keyboard protocol
- [anomalyco/opencode#57237](https://github.com/anomalyco/opencode/pull/57237) fix(cli): expose retryable ACP plugin activation readiness errors
- [anomalyco/opencode#57236](https://github.com/anomalyco/opencode/pull/57236) fix(core): retry truncated compaction with less history
- [ARUNAGIRINATHAN-K/awesome-ai-agents-2026#494](https://github.com/ARUNAGIRINATHAN-K/awesome-ai-agents-2026/pull/494) Add OpenFlow to Coding Agents
- [benchflow-ai/awesome-evals#134](https://github.com/benchflow-ai/awesome-evals/pull/134) Add openflow to eval frameworks and harnesses
- [bradAGI/awesome-cli-coding-agents#516](https://github.com/bradAGI/awesome-cli-coding-agents/pull/516) Add openflow to Orchestrators & autonomous loops
- [browser-use/browser-use#6132](https://github.com/browser-use/browser-use/pull/6132) fix(llm): keep Field descriptions when flattening $ref in optimized schemas
- [caramaschiHG/awesome-ai-agents-2026#692](https://github.com/caramaschiHG/awesome-ai-agents-2026/pull/692) Add Openflow to Task and Workflow Agents (Automation)
- [code-yeongyu/oh-my-openagent#11745](https://github.com/code-yeongyu/oh-my-openagent/pull/11745) fix(omo-opencode): session_list date filter uses metadata time.updated instead of reading every session (#10796)
- [code-yeongyu/oh-my-openagent#11699](https://github.com/code-yeongyu/oh-my-openagent/pull/11699) fix(memory): let update_description add frontmatter to a note that has none
- [code-yeongyu/oh-my-openagent#11698](https://github.com/code-yeongyu/oh-my-openagent/pull/11698) fix(omo-senpi): freeze the shared models.json parse and type it deeply readonly
- [code-yeongyu/oh-my-openagent#11697](https://github.com/code-yeongyu/oh-my-openagent/pull/11697) fix(omo-senpi): pin competing pathspec switches off for side panel git diffs
- [code-yeongyu/oh-my-openagent#11088](https://github.com/code-yeongyu/oh-my-openagent/pull/11088) feat(mcp): add Volcano Engine as a websearch provider
- [code-yeongyu/oh-my-openagent#11087](https://github.com/code-yeongyu/oh-my-openagent/pull/11087) fix(omo-senpi): cover gateway-rules-extension in build-extension --check (#8263)
- [code-yeongyu/oh-my-openagent#11085](https://github.com/code-yeongyu/oh-my-openagent/pull/11085) fix(omo-senpi): run the init-deep advisor on the first real prompt, not session_start
- [code-yeongyu/oh-my-openagent#11077](https://github.com/code-yeongyu/oh-my-openagent/pull/11077) fix(omo-native): warn on broken catalog cache for proxy blocks and name keyed ids missing from the catalog
- [code-yeongyu/oh-my-openagent#11075](https://github.com/code-yeongyu/oh-my-openagent/pull/11075) fix(installer-mirror): retry transient GitHub 5xx asset downloads with backoff
- [code-yeongyu/oh-my-openagent#10955](https://github.com/code-yeongyu/oh-my-openagent/pull/10955) fix(config-migration): report legacy keys that config migrate does not import
- [comet-ml/opik#9278](https://github.com/comet-ml/opik/pull/9278) issue-8590 SDK fix: accept repeated identical JSON objects in TS LLM-judge parser
- [comet-ml/opik#9271](https://github.com/comet-ml/opik/pull/9271) issue-8868 SDK fix: treat blank OPIK_API_KEY as unconfigured
- [comet-ml/opik#9270](https://github.com/comet-ml/opik/pull/9270) NA SDK fix: aggregate Cohere streamed tool plan and tool calls
- [crewAIInc/crewAI#8258](https://github.com/crewAIInc/crewAI/pull/8258) fix(schema): keep sibling keys of $ref nodes in resolve_refs
- [e2b-dev/awesome-ai-agents#1855](https://github.com/e2b-dev/awesome-ai-agents/pull/1855) Add openswarm
- [filipecalegario/awesome-vibe-coding#392](https://github.com/filipecalegario/awesome-vibe-coding/pull/392) Add OpenFlow
- [huggingface/smolagents#3020](https://github.com/huggingface/smolagents/pull/3020) Only rewrite real final_answer assignments in fix_final_answer_code
- [jamesmurdza/awesome-ai-devtools#1256](https://github.com/jamesmurdza/awesome-ai-devtools/pull/1256) Add OpenFlow to Configuration & Context Management
- [Jenqyang/Awesome-AI-Agents#688](https://github.com/Jenqyang/Awesome-AI-Agents/pull/688) Add OpenFlow to Tools
- [Jenqyang/Awesome-AI-Agents#687](https://github.com/Jenqyang/Awesome-AI-Agents/pull/687) Add OpenSwarm to Multi-Agent Task Solver Projects
- [mahseema/awesome-ai-tools#2543](https://github.com/mahseema/awesome-ai-tools/pull/2543) Add Openflow to Code
- [modelcontextprotocol/typescript-sdk#3050](https://github.com/modelcontextprotocol/typescript-sdk/pull/3050) fix(core): expand RFC 6570 list and multi-variable expressions correctly
- [nightly-labs/openbot#3786](https://github.com/nightly-labs/openbot/pull/3786) fix(backend): re-read a spent usage reading before its reset
- [nightly-labs/openbot#3686](https://github.com/nightly-labs/openbot/pull/3686) Fail the Gemini turn when Google answers with an account verification prompt
- [NipunaRanasinghe/awesome-ai-agents#257](https://github.com/NipunaRanasinghe/awesome-ai-agents/pull/257) Add OpenSwarm to Core Frameworks
- [NousResearch/hermes-agent#141789](https://github.com/NousResearch/hermes-agent/pull/141789) fix(agent): retry disabled Anthropic fast mode at standard speed
- [NousResearch/hermes-agent#141743](https://github.com/NousResearch/hermes-agent/pull/141743) fix(desktop): resolve remote previews without local filesystem state
- [NousResearch/hermes-agent#141739](https://github.com/NousResearch/hermes-agent/pull/141739) fix(sessions): omit hidden context from prompt-only exports
- [NousResearch/hermes-agent#139572](https://github.com/NousResearch/hermes-agent/pull/139572) fix(doctor): fail when gateway process or A2A port is down
- [NousResearch/hermes-agent#135709](https://github.com/NousResearch/hermes-agent/pull/135709) fix(dingtalk): ship python-socks so the stream websocket can use a SOCKS proxy
- [obra/superpowers#2548](https://github.com/obra/superpowers/pull/2548) docs(skills): require RED output for batched TDD and fix-pass ledger
- [obra/superpowers#2543](https://github.com/obra/superpowers/pull/2543) fix(task-brief): diagnose translated Task headings
- [obra/superpowers#2538](https://github.com/obra/superpowers/pull/2538) fix(lint-shell): print full header comment for --help
- [openclaw/openclaw#177771](https://github.com/openclaw/openclaw/pull/177771) fix(gateway): retain metadata errors after late startup refreshes
- [openclaw/openclaw#177754](https://github.com/openclaw/openclaw/pull/177754) fix(memory): report unexpected loss of remote file watching
- [openclaw/openclaw#176558](https://github.com/openclaw/openclaw/pull/176558) fix(irc): SecretRef IRC passwords fail validation and service-only NickServ overrides skip the inherited ref
- [openclaw/openclaw#175933](https://github.com/openclaw/openclaw/pull/175933) docs(macos): explain the Bun local-network and Git prompts on first launch
- [RoggeOhta/awesome-codex-cli#487](https://github.com/RoggeOhta/awesome-codex-cli/pull/487) Add openflow to Cross-Agent Tools
- [rohitg00/awesome-claude-code-toolkit#874](https://github.com/rohitg00/awesome-claude-code-toolkit/pull/874) Add openflow to the Ecosystem table
- [run-llama/llama_index#23603](https://github.com/run-llama/llama_index/pull/23603) fix(core): use matching embeddings in EmbeddingRecencyPostprocessor
- [slavakurilyak/awesome-ai-agents#875](https://github.com/slavakurilyak/awesome-ai-agents/pull/875) Add OpenFlow (executable delivery workflows for AI coding agents)
- [strands-agents/harness-sdk#5622](https://github.com/strands-agents/harness-sdk/pull/5622) fix(tools): warn when a tool parameter named agent has a non-Agent annotation
- [strands-agents/harness-sdk#5504](https://github.com/strands-agents/harness-sdk/pull/5504) fix(models): port strict schema transform fixes from TS
- [strands-agents/harness-sdk#5463](https://github.com/strands-agents/harness-sdk/pull/5463) fix(cli): mirror the 2026-10 model-catalog context windows in FALLBACK_CONTEXT_WINDOWS

</details>

<sub>Generated from the GitHub search API by [a daily workflow](https://github.com/surlymochan/surlymochan/blob/main/.github/workflows/update-readme.yml).</sub>
<!-- CONTRIB:END -->

</details>

## Contribution Streak

<p>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=surlymochan&theme=github_dark">
    <img alt="Contribution timeline for surlymochan" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=surlymochan&theme=github" width="830">
  </picture>
</p>

<p>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://streak-stats.demolab.com?user=surlymochan&hide_border=true&theme=github-dark-blue">
    <img alt="Contribution streak for surlymochan" src="https://streak-stats.demolab.com?user=surlymochan&hide_border=true&theme=default" height="165">
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats.vercel.app/api?username=surlymochan&show_icons=true&hide_border=true&theme=github_dark">
    <img alt="GitHub stats for surlymochan" src="https://github-readme-stats.vercel.app/api?username=surlymochan&show_icons=true&hide_border=true" height="165">
  </picture>
</p>

<p>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=surlymochan&theme=github_dark">
    <img alt="Contribution stats for surlymochan" src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=surlymochan&theme=github" height="165">
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats.vercel.app/api/top-langs/?username=surlymochan&layout=compact&hide_border=true&theme=github_dark">
    <img alt="Top languages for surlymochan" src="https://github-readme-stats.vercel.app/api/top-langs/?username=surlymochan&layout=compact&hide_border=true" height="165">
  </picture>
</p>

## Experiments & Notes

I publish benchmark methods and run records alongside my tools. Results are specific to the tasks, models, and configurations tested; small samples need careful interpretation.

- [OpenFlow benchmarks](https://github.com/surlymochan/openflow#benchmarks-openflow-vs-superpowers-2026-10-17)
- [OpenSwarm experiments](https://github.com/surlymochan/openswarm/tree/main/bench)
- [Merged upstream PRs](https://github.com/pulls?q=is%3Apr+author%3Asurlymochan+is%3Amerged+-user%3Anibiru-labs+-user%3Asurlymochan)

More tools will appear here as their installation, documentation, and examples are ready for others to use.
