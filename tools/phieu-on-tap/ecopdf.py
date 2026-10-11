import asyncio
from playwright.async_api import async_playwright
J=[('l4-de1','phieu-lam-bai-de-1-tiet-kiem'),('l4-de2','phieu-lam-bai-de-2-tiet-kiem'),('l10-de','de-kiem-tra-dung-chung'),('l10-tl','phieu-tra-loi-tiet-kiem')]
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch(); pg=await b.new_page()
    for s,d in J:
      await pg.goto('file:///home/claude/pdfbuild/eco/'+s+'.html'); await pg.wait_for_timeout(300); await pg.evaluate('document.fonts.ready')
      await pg.pdf(path='/home/claude/pdfbuild/eco/'+d+'.pdf', format='A4', print_background=True, prefer_css_page_size=True)
    await b.close()
asyncio.run(main())
