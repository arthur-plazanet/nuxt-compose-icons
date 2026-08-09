---
'nuxt-compose-icons': patch
---

Bump `svgo` to 4.0.2, patching GHSA-2p49-hgcm-8545 (`removeScripts` plugin leaves
some executable scripts intact under namespaced/prefixed `<script>` tags or
mixed-case `javascript:` URIs). The module never enables `removeScripts`, so this
wasn't exploitable through our own optimization pipeline — bumping anyway to clear
the advisory flagged by Socket for the published package's dependency tree.
