describe('duckduckgo', () => {
  it('Go to DuckDuckGo', () => {
    browser.url('https://duckduckgo.com/');
  });
  it('Enters value to search', () => {
    $('#search_form_input_homepage').setValue(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate in nulla maximus maximus. Proin sed vestibulum nisl. Nunc sollicitudin diam nunc, non aliquet dolor placerat quis. Morbi sollicitudin velit a ipsum tincidunt eleifend. Aliquam consequat auctor augue, eu finibus mauris interdum eu. Curabitur a rhoncus est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris a erat faucibus, tincidunt ipsum ac, tincidunt tellus. Quisque consectetur ex ac urna tincidunt, nec tristique massa aliquet. Maecenas pellentesque congue enim eu posuere. Integer eget sollicitudin orci, in efficitur lacus.'
    );
  });
});
