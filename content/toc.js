// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="../content/I.WELCOME.html"><strong aria-hidden="true">1.</strong> I.WELCOME</a></li><li class="chapter-item expanded "><a href="../content/1.前言.html"><strong aria-hidden="true">2.</strong> 1.前言</a></li><li class="chapter-item expanded "><a href="../content/2.領土地圖.html"><strong aria-hidden="true">3.</strong> 2.領土地圖</a></li><li class="chapter-item expanded "><a href="../content/3.Lox語言.html"><strong aria-hidden="true">4.</strong> 3.Lox語言</a></li><li class="chapter-item expanded "><a href="../content/II.A_TREE-WALK_INTERPRETER.html"><strong aria-hidden="true">5.</strong> II.A_TREE-WALK_INTERPRETER</a></li><li class="chapter-item expanded "><a href="../content/4.掃描.html"><strong aria-hidden="true">6.</strong> 4.掃描</a></li><li class="chapter-item expanded "><a href="../content/5.表示代碼.html"><strong aria-hidden="true">7.</strong> 5.表示代碼</a></li><li class="chapter-item expanded "><a href="../content/6.解析表達式.html"><strong aria-hidden="true">8.</strong> 6.解析表達式</a></li><li class="chapter-item expanded "><a href="../content/7.表達式求值.html"><strong aria-hidden="true">9.</strong> 7.表達式求值</a></li><li class="chapter-item expanded "><a href="../content/8.表達式和狀態.html"><strong aria-hidden="true">10.</strong> 8.表達式和狀態</a></li><li class="chapter-item expanded "><a href="../content/9.控制流.html"><strong aria-hidden="true">11.</strong> 9.控制流</a></li><li class="chapter-item expanded "><a href="../content/10.函數.html"><strong aria-hidden="true">12.</strong> 10.函數</a></li><li class="chapter-item expanded "><a href="../content/11.解析和綁定.html"><strong aria-hidden="true">13.</strong> 11.解析和綁定</a></li><li class="chapter-item expanded "><a href="../content/12.類.html"><strong aria-hidden="true">14.</strong> 12.類</a></li><li class="chapter-item expanded "><a href="../content/13.繼承.html"><strong aria-hidden="true">15.</strong> 13.繼承</a></li><li class="chapter-item expanded "><a href="../content/III.A_BYTECODE_VIRTUAL_MACHINE.html"><strong aria-hidden="true">16.</strong> III.A_BYTECODE_VIRTUAL_MACHINE</a></li><li class="chapter-item expanded "><a href="../content/14.字節碼塊.html"><strong aria-hidden="true">17.</strong> 14.字節碼塊</a></li><li class="chapter-item expanded "><a href="../content/15.虛擬機.html"><strong aria-hidden="true">18.</strong> 15.虛擬機</a></li><li class="chapter-item expanded "><a href="../content/16.按需掃描.html"><strong aria-hidden="true">19.</strong> 16.按需掃描</a></li><li class="chapter-item expanded "><a href="../content/17.編譯表達式.html"><strong aria-hidden="true">20.</strong> 17.編譯表達式</a></li><li class="chapter-item expanded "><a href="../content/18.值類型.html"><strong aria-hidden="true">21.</strong> 18.值類型</a></li><li class="chapter-item expanded "><a href="../content/19.字符串.html"><strong aria-hidden="true">22.</strong> 19.字符串</a></li><li class="chapter-item expanded "><a href="../content/20.哈希表.html"><strong aria-hidden="true">23.</strong> 20.哈希表</a></li><li class="chapter-item expanded "><a href="../content/21.全局變量.html"><strong aria-hidden="true">24.</strong> 21.全局變量</a></li><li class="chapter-item expanded "><a href="../content/22.局部變量.html"><strong aria-hidden="true">25.</strong> 22.局部變量</a></li><li class="chapter-item expanded "><a href="../content/23.來回跳轉.html"><strong aria-hidden="true">26.</strong> 23.來回跳轉</a></li><li class="chapter-item expanded "><a href="../content/24.調用和函數.html"><strong aria-hidden="true">27.</strong> 24.調用和函數</a></li><li class="chapter-item expanded "><a href="../content/25.閉包.html"><strong aria-hidden="true">28.</strong> 25.閉包</a></li><li class="chapter-item expanded "><a href="../content/26.垃圾回收.html"><strong aria-hidden="true">29.</strong> 26.垃圾回收</a></li><li class="chapter-item expanded "><a href="../content/27.類與實例.html"><strong aria-hidden="true">30.</strong> 27.類與實例</a></li><li class="chapter-item expanded "><a href="../content/28.方法和初始化器.html"><strong aria-hidden="true">31.</strong> 28.方法和初始化器</a></li><li class="chapter-item expanded "><a href="../content/29.超類.html"><strong aria-hidden="true">32.</strong> 29.超類</a></li><li class="chapter-item expanded "><a href="../content/30.優化.html"><strong aria-hidden="true">33.</strong> 30.優化</a></li><li class="chapter-item expanded "><a href="../content/後記.html"><strong aria-hidden="true">34.</strong> 後記</a></li><li class="chapter-item expanded "><a href="../content/附錄I.html"><strong aria-hidden="true">35.</strong> 附錄I</a></li><li class="chapter-item expanded "><a href="../content/附錄II.html"><strong aria-hidden="true">36.</strong> 附錄II</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
