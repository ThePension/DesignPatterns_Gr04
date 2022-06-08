/**
 * @class HomepageView
 */
 class UnknownRouteView 
 {
    constructor()
    {
      this.app = Helper.getElement('#root');

      this.informationTitle = Helper.createElement('h1', "text-center mt-5 mb-3");
      this.informationTitle.innerHTML = "Unknown route"

      this.informationText = Helper.createElement('h5', "text-center mb-5");
      this.informationText.textContent = "This page does not exist. You can return to the Homepage with the button below."

      this.createButton = Helper.createElement('button', 'btn btn-info text-light m-3');
      this.createButton.textContent = 'Go to Homepage';

      this.createButton.addEventListener('click', event => {
        event.preventDefault();

        // Redirection on create sandwich page
        Helper.redirect('index');
      });
      
      this.app.append(this.informationTitle, this.informationText, this.createButton);
  }
}