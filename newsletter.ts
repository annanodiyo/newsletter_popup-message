class NewsletterForm {
    private formElement: HTMLFormElement | null;
    private subscribeButton: HTMLInputElement | null;
    private newsletterContainer: HTMLElement | null;
    private messageContainer: HTMLElement | null;

    constructor() {
      this.formElement = document.querySelector('form');
      this.subscribeButton = document.querySelector('#submit');
      this.newsletterContainer = document.querySelector('.newsletter');
      this.messageContainer = document.querySelector('.message');

      if (this.formElement && this.subscribeButton && this.newsletterContainer && this.messageContainer) {
        this.subscribeButton.addEventListener('click', this.handleSubscribe.bind(this));
      }
    }

    private handleSubscribe(event: Event) {
      event.preventDefault();

      // Hide the newsletter container and show the message container
      if (this.newsletterContainer && this.messageContainer) {
        this.newsletterContainer.style.display = 'none';
        this.messageContainer.style.display = 'block';
      }

      // Rest of your form submission logic can go here
    }

    // Rest of the class code
  }

  document.addEventListener('DOMContentLoaded', () => {
    new NewsletterForm();
  });
