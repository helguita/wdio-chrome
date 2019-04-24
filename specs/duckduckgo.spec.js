describe('duckduckgo', () => {
  it('Go to DuckDuckGo', () => {
    browser.url('https://duckduckgo.com/');
  });
  it('Enters value to search', () => {
    $('#search_form_input_homepage').setValue(
      'Necessity is the mother of invention.'
    );
  });
});
