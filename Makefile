.PHONY: help run
.SILENT: ;

help: # Show this help
	echo "Usage: make [target]"
	echo ""
	echo "Targets:"
	grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-20s %s\n", $$1, $$2}'

run: ## Run in dev mode
	export PORT=3987 && npm start