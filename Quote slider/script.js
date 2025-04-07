
// JSON Data
const quotesData = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
  { text: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
  { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
  { text: "Without music, life would be a mistake.", author: "Friedrich Nietzsche" }
];

class QuoteSlider {
  constructor(data) {
    this.data = data;
    this.index = 0;
    this.intervalId = null;
    this.$quote = $('#quoteText');
    this.$author = $('#quoteAuthor');
    this.init();
  }

  init() {
    this.render();
    this.setAutoSlide();

    $('#prevBtn').on('click', () => {
      this.prev();
      this.resetInterval();
    });

    $('#nextBtn').on('click', () => {
      this.next();
      this.resetInterval();
    });
  }

  render() {
    const current = this.data[this.index];
    this.$quote.text(`"${current.text}"`);
    this.$author.text(`— ${current.author}`);
  }

  next() {
    this.index = (this.index + 1) % this.data.length;
    this.render();
  }

  prev() {
    this.index = (this.index - 1 + this.data.length) % this.data.length;
    this.render();
  }

  setAutoSlide() {
    this.intervalId = setInterval(() => this.next(), 5000);
  }

  resetInterval() {
    clearInterval(this.intervalId);
    this.setAutoSlide();
  }
}

// Initialize the slider
$(document).ready(() => {
  const quoteSlider = new QuoteSlider(quotesData);
});
