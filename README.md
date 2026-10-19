```text
+------------------------------------------------------------------+
|                                                                  |
|    ##     ##     ###     ########   ##     ##  ####   ######     |
|     ##   ##     ## ##    ##     ##  ##     ##   ##   ##    ##    |
|      ## ##     ##   ##   ##     ##  ##     ##   ##   ##          |
|       ###     ##     ##  ########   ##     ##   ##    ######     |
|      ## ##    #########  ##   ##     ##   ##    ##         ##    |
|     ##   ##   ##     ##  ##    ##     ## ##     ##   ##    ##    |
|    ##     ##  ##     ##  ##     ##     ###     ####   ######     |
|                                                                  |
|          observability  /  go  /  ai agent engineering           |
|                                                                  |
+------------------------------------------------------------------+
```

### Nick (Chao Chen)

Apache SkyWalking committer since 2020, working on [skywalking-rover](https://github.com/apache/skywalking-rover) (eBPF-based profiling and network observability), [skywalking-satellite](https://github.com/apache/skywalking-satellite) (the telemetry collector) and the Go side of the ecosystem.

These days I split my time between observability and AI agent engineering: tracing, dependency hygiene, and agents that hold up outside a demo. Most of my code is Go, with TypeScript and Python where the tooling lives.

### Building

- [openflow](https://github.com/surlymochan/openflow): an evidence-gated workflow runtime for AI coding agents (`npm i -g @surlymochan/openflow`)
- [openswarm](https://github.com/surlymochan/openswarm): a quota-aware dispatcher where Claude plans and Codex, OpenCode Go or DeepSeek write the code, each task in an isolated git worktree with a hard budget
- [codexclaw](https://github.com/surlymochan/codexclaw): run Codex CLI from Feishu/Lark chats, with memory and scheduled tasks (`npm i -g @surlymochan/codexclaw`)

### Open source contributions

<!-- CONTRIB:START -->
Merged upstream pull requests: **10** across **9** repositories.

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

- [OpenSpec#2103](https://github.com/Fission-AI/OpenSpec/pull/2103) fix(security): replace fast-glob with tinyglobby to drop braces

<details>
<summary>In review (23)</summary>

- [ai-for-developers/awesome-ai-coding-tools#1006](https://github.com/ai-for-developers/awesome-ai-coding-tools/pull/1006) Add OpenFlow to Testing and QA
- [browser-use/browser-use#6132](https://github.com/browser-use/browser-use/pull/6132) fix(llm): keep Field descriptions when flattening $ref in optimized schemas
- [crewAIInc/crewAI#8258](https://github.com/crewAIInc/crewAI/pull/8258) fix(schema): keep sibling keys of $ref nodes in resolve_refs
- [cursor/plugins#707](https://github.com/cursor/plugins/pull/707) fix(pstack): make worktree-audit's LAST_CHAT work with GNU stat and date
- [filipecalegario/awesome-vibe-coding#392](https://github.com/filipecalegario/awesome-vibe-coding/pull/392) Add OpenFlow
- [Fission-AI/OpenSpec#2120](https://github.com/Fission-AI/OpenSpec/pull/2120) fix(new-change): name the configured schema in the progress line
- [Fission-AI/OpenSpec#2116](https://github.com/Fission-AI/OpenSpec/pull/2116) perf(cli): load ora only when a spinner is shown
- [Fission-AI/OpenSpec#2114](https://github.com/Fission-AI/OpenSpec/pull/2114) fix(verify): match REMOVED baselines by exact normalized name
- [garrytan/gstack#3256](https://github.com/garrytan/gstack/pull/3256) fix(cso): treat untracked nested repos and submodules as snapshot boundaries
- [garrytan/gstack#3244](https://github.com/garrytan/gstack/pull/3244) fix(context): pin English provenance markers and ask when branch cannot discriminate
- [huggingface/smolagents#3020](https://github.com/huggingface/smolagents/pull/3020) Only rewrite real final_answer assignments in fix_final_answer_code
- [infiniflow/ragflow#21110](https://github.com/infiniflow/ragflow/pull/21110) fix(web): accept null table_column_* fields in dataset settings form
- [jamesmurdza/awesome-ai-devtools#1256](https://github.com/jamesmurdza/awesome-ai-devtools/pull/1256) Add OpenFlow to Configuration & Context Management
- [modelcontextprotocol/go-sdk#1412](https://github.com/modelcontextprotocol/go-sdk/pull/1412) mcp: parse SSE field values per the SSE spec
- [modelcontextprotocol/typescript-sdk#3050](https://github.com/modelcontextprotocol/typescript-sdk/pull/3050) fix(core): expand RFC 6570 list and multi-variable expressions correctly
- [NousResearch/hermes-agent#139572](https://github.com/NousResearch/hermes-agent/pull/139572) fix(doctor): fail when gateway process or A2A port is down
- [NousResearch/hermes-agent#135709](https://github.com/NousResearch/hermes-agent/pull/135709) fix(dingtalk): ship python-socks so the stream websocket can use a SOCKS proxy
- [obra/superpowers#2548](https://github.com/obra/superpowers/pull/2548) docs(skills): require RED output for batched TDD and fix-pass ledger
- [obra/superpowers#2543](https://github.com/obra/superpowers/pull/2543) fix(task-brief): diagnose translated Task headings
- [obra/superpowers#2538](https://github.com/obra/superpowers/pull/2538) fix(lint-shell): print full header comment for --help
- [openclaw/openclaw#176558](https://github.com/openclaw/openclaw/pull/176558) fix(irc): SecretRef IRC passwords fail validation and service-only NickServ overrides skip the inherited ref
- [openclaw/openclaw#175933](https://github.com/openclaw/openclaw/pull/175933) docs(macos): explain the Bun local-network and Git prompts on first launch
- [run-llama/llama_index#23603](https://github.com/run-llama/llama_index/pull/23603) fix(core): use matching embeddings in EmbeddingRecencyPostprocessor

</details>

<sub>Generated from the GitHub search API by [a daily workflow](https://github.com/surlymochan/surlymochan/blob/main/.github/workflows/update-readme.yml).</sub>
<!-- CONTRIB:END -->

Full lists: [merged PRs](https://github.com/pulls?q=is%3Apr+author%3Asurlymochan+is%3Amerged+-user%3Anibiru-labs+-user%3Asurlymochan) · [open PRs](https://github.com/pulls?q=is%3Apr+author%3Asurlymochan+is%3Aopen+-user%3Anibiru-labs+-user%3Asurlymochan) · [OSS Insight analysis](https://ossinsight.io/analyze/surlymochan)

### Activity

<a href="https://ossinsight.io/analyze/surlymochan">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://next.ossinsight.io/widgets/official/compose-user-dashboard-stats/thumbnail.png?user_id=209239467&image_size=auto&color_scheme=dark">
    <img alt="OSS Insight dashboard for surlymochan" src="https://next.ossinsight.io/widgets/official/compose-user-dashboard-stats/thumbnail.png?user_id=209239467&image_size=auto&color_scheme=light" width="720">
  </picture>
</a>

<p>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats.vercel.app/api?username=surlymochan&show_icons=true&hide_rank=true&hide_border=true&theme=github_dark">
    <img alt="GitHub stats for surlymochan" src="https://github-readme-stats.vercel.app/api?username=surlymochan&show_icons=true&hide_rank=true&hide_border=true&theme=default" height="165">
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://streak-stats.demolab.com?user=surlymochan&hide_border=true&theme=github-dark-blue">
    <img alt="Contribution streak for surlymochan" src="https://streak-stats.demolab.com?user=surlymochan&hide_border=true&theme=default" height="165">
  </picture>
</p>

[surlymo@apache.org](mailto:surlymo@apache.org)
