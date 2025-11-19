serve:
	@mdbook serve

build:
	@echo "清理不必要的檔案..."
	@find src -type d -name "target" -exec rm -rf {} + 2>/dev/null || true
	@find src -type d -name "checkpoints" -exec rm -rf {} + 2>/dev/null || true
	@find src -type d -name "node_modules" -exec rm -rf {} + 2>/dev/null || true
	@echo "開始建置..."
	@mdbook build -d book/content 2>&1 | grep -v "search index is very large" || true
	@echo "複製靜態資源到 book 根目錄..."
	@cp book/content/index.html book/
	@cp book/content/404.html book/
	@cp -r book/content/css book/
	@cp -r book/content/fonts book/
	@cp -r book/content/FontAwesome book/
	@cp book/content/*.css book/
	@cp book/content/*.js book/

clean:
	rm -fr book

github:
	@ghp-import book -p -n
