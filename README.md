# Hi, I'm Nick 👋

**AI agents · Harness engineering · Reliable loops & graphs**

I build tools for running coding agents, coordinating their work, and checking what they deliver. My focus is executable workflows, isolated execution, and experiments others can reproduce.

## Start Here

- 🔁 **[OpenFlow](https://github.com/surlymochan/openflow)** — executable delivery workflows for AI coding agents, with YAML phases and evidence gates. [Quickstart](https://github.com/surlymochan/openflow#3-minute-start) · [npm](https://www.npmjs.com/package/@surlymochan/openflow)
- 🐝 **[OpenSwarm](https://github.com/surlymochan/openswarm)** — quota-aware dispatch across coding agents, with isolated git worktrees, time budgets, and host-side verification. [Getting started](https://github.com/surlymochan/openswarm#quickstart)

## Current Projects

### Harnesses & Delivery Workflows

- **[OpenFlow](https://github.com/surlymochan/openflow)** turns delivery phases and acceptance evidence into an executable workflow. For developers who want to inspect how an agent's result was checked.

### Agent Execution & Orchestration

- **[OpenSwarm](https://github.com/surlymochan/openswarm)** separates planning from execution and routes tasks across Codex, OpenCode, DeepSeek, and opt-in backends. Each task runs in its own worktree with explicit limits.

## Open Source

Recent merged contributions:

- **[OpenSpec](https://github.com/Fission-AI/OpenSpec/pull/2103)** — replaced a glob dependency to remove a vulnerable transitive dependency.
- **[OpenClaw](https://github.com/openclaw/openclaw/pull/177871)** — preserved compatible reasoning in follow-up requests.
- **[MCP Go SDK](https://github.com/modelcontextprotocol/go-sdk/pull/1412)** — corrected SSE field-value parsing.

Currently contributing fixes to **[OpenSpec](https://github.com/Fission-AI/OpenSpec/pulls?q=is%3Apr+author%3Asurlymochan)**, **[OpenBot](https://github.com/nightly-labs/openbot/pulls?q=is%3Apr+author%3Asurlymochan)**, and **[superpowers](https://github.com/obra/superpowers/pulls?q=is%3Apr+author%3Asurlymochan)**. Open pull requests are proposals, not merged features or maintainer roles.

<details>
<summary>Contribution history & open pull requests</summary>

<!-- CONTRIB:START -->
Merged upstream pull requests: **14** across **13** repositories.

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

**infiniflow/ragflow**

- [ragflow#21110](https://github.com/infiniflow/ragflow/pull/21110) fix(web): accept null table_column_* fields in dataset settings form

**modelcontextprotocol/go-sdk**

- [go-sdk#1412](https://github.com/modelcontextprotocol/go-sdk/pull/1412) mcp: parse SSE field values per the SSE spec

**nightly-labs/openbot**

- [openbot#2578](https://github.com/nightly-labs/openbot/pull/2578) Report an MCP sign-in that cannot start

**openclaw/openclaw**

- [openclaw#177871](https://github.com/openclaw/openclaw/pull/177871) fix(ai): preserve compatible reasoning in follow-up requests

**OpenSpec**

- [OpenSpec#2103](https://github.com/Fission-AI/OpenSpec/pull/2103) fix(security): replace fast-glob with tinyglobby to drop braces

<details>
<summary>In review (32)</summary>

- [ai-boost/awesome-harness-engineering#345](https://github.com/ai-boost/awesome-harness-engineering/pull/345) Add openflow to Verification & CI Integration
- [ai-for-developers/awesome-ai-coding-tools#1006](https://github.com/ai-for-developers/awesome-ai-coding-tools/pull/1006) Add OpenFlow to Testing and QA
- [anomalyco/opencode#57237](https://github.com/anomalyco/opencode/pull/57237) fix(cli): expose retryable ACP plugin activation readiness errors
- [anomalyco/opencode#57236](https://github.com/anomalyco/opencode/pull/57236) fix(core): retry truncated compaction with less history
- [anomalyco/opencode#57207](https://github.com/anomalyco/opencode/pull/57207) fix(plugin): honor abort signals in promise API calls
- [benchflow-ai/awesome-evals#134](https://github.com/benchflow-ai/awesome-evals/pull/134) Add openflow to eval frameworks and harnesses
- [bradAGI/awesome-cli-coding-agents#516](https://github.com/bradAGI/awesome-cli-coding-agents/pull/516) Add openflow to Orchestrators & autonomous loops
- [browser-use/browser-use#6132](https://github.com/browser-use/browser-use/pull/6132) fix(llm): keep Field descriptions when flattening $ref in optimized schemas
- [crewAIInc/crewAI#8258](https://github.com/crewAIInc/crewAI/pull/8258) fix(schema): keep sibling keys of $ref nodes in resolve_refs
- [cursor/plugins#707](https://github.com/cursor/plugins/pull/707) fix(pstack): make worktree-audit's LAST_CHAT work with GNU stat and date
- [filipecalegario/awesome-vibe-coding#392](https://github.com/filipecalegario/awesome-vibe-coding/pull/392) Add OpenFlow
- [Fission-AI/OpenSpec#2120](https://github.com/Fission-AI/OpenSpec/pull/2120) fix(new-change): name the configured schema in the progress line
- [Fission-AI/OpenSpec#2116](https://github.com/Fission-AI/OpenSpec/pull/2116) perf(cli): load ora only when a spinner is shown
- [Fission-AI/OpenSpec#2114](https://github.com/Fission-AI/OpenSpec/pull/2114) fix(verify): match REMOVED baselines by exact normalized name
- [huggingface/smolagents#3020](https://github.com/huggingface/smolagents/pull/3020) Only rewrite real final_answer assignments in fix_final_answer_code
- [jamesmurdza/awesome-ai-devtools#1256](https://github.com/jamesmurdza/awesome-ai-devtools/pull/1256) Add OpenFlow to Configuration & Context Management
- [modelcontextprotocol/typescript-sdk#3050](https://github.com/modelcontextprotocol/typescript-sdk/pull/3050) fix(core): expand RFC 6570 list and multi-variable expressions correctly
- [nightly-labs/openbot#2577](https://github.com/nightly-labs/openbot/pull/2577) Read inline triple-backtick code as text in Live Activities
- [nightly-labs/openbot#2576](https://github.com/nightly-labs/openbot/pull/2576) Keep emoji whole when a Live Activity cuts a code span
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
- [run-llama/llama_index#23603](https://github.com/run-llama/llama_index/pull/23603) fix(core): use matching embeddings in EmbeddingRecencyPostprocessor

</details>

<sub>Generated from the GitHub search API by [a daily workflow](https://github.com/surlymochan/surlymochan/blob/main/.github/workflows/update-readme.yml).</sub>
<!-- CONTRIB:END -->

</details>

## Contribution Streak

<p>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://streak-stats.demolab.com?user=surlymochan&hide_border=true&theme=github-dark-blue">
    <img alt="Contribution streak for surlymochan" src="https://streak-stats.demolab.com?user=surlymochan&hide_border=true&theme=default" height="165">
  </picture>
</p>

## Experiments & Notes

I publish benchmark methods and run records alongside my tools. Results are specific to the tasks, models, and configurations tested; small samples need careful interpretation.

- [OpenFlow benchmarks](https://github.com/surlymochan/openflow#benchmarks-openflow-vs-superpowers-2026-10-17)
- [OpenSwarm experiments](https://github.com/surlymochan/openswarm/tree/main/bench)
- [Merged upstream PRs](https://github.com/pulls?q=is%3Apr+author%3Asurlymochan+is%3Amerged+-user%3Anibiru-labs+-user%3Asurlymochan)

More tools will appear here as their installation, documentation, and examples are ready for others to use.
