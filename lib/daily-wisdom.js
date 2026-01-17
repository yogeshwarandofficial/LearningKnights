export const DAILY_WORDS = [
  {
    word: 'Ephemeral',
    pronunciation: '/əˈfem(ə)rəl/',
    type: 'adjective',
    definition: 'Lasting for a very short time.',
    example: 'Fashions are ephemeral, changing with every season.',
    origin: 'Greek ephemeros "lasting a day"',
  },
  {
    word: 'Serendipity',
    pronunciation: '/ˌserənˈdipədē/',
    type: 'noun',
    definition: 'The occurrence and development of events by chance in a happy or beneficial way.',
    example: 'Wait a moment; serendipity might just bring you the perfect opportunity.',
    origin: 'Coined by Horace Walpole inside "The Three Princes of Serendip"',
  },
  {
    word: 'Mellifluous',
    pronunciation: '/məˈliflo͞oəs/',
    type: 'adjective',
    definition: '(of a voice or words) sweet or musical; pleasant to hear.',
    example: 'She had a rich, mellifluous voice that captivated the audience.',
    origin: 'Latin mel "honey" + fluere "to flow"',
  },
  {
    word: 'Ineffable',
    pronunciation: '/inˈefəb(ə)l/',
    type: 'adjective',
    definition: 'Too great or extreme to be expressed or described in words.',
    example: 'The ineffable beauty of the sunrise left us speechless.',
    origin: 'Latin ineffabilis',
  },
  {
    word: 'Luminous',
    pronunciation: '/ˈlo͞omənəs/',
    type: 'adjective',
    definition: 'Full of or shedding light; bright or shining, especially in the dark.',
    example: 'The luminous dial of the clock glowed in the darkness.',
    origin: 'Latin lumen "light"',
  },
  {
    word: 'Petrichor',
    pronunciation: '/ˈpetrəˌkôr/',
    type: 'noun',
    definition: 'A pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather.',
    example: 'As the storm broke, the air was filled with the distinct scent of petrichor.',
    origin: 'Greek petra "stone" + ichor "ethereal fluid"',
  },
  {
    word: 'Solitude',
    pronunciation: '/ˈsäləˌt(y)o͞od/',
    type: 'noun',
    definition: 'The state or situation of being alone.',
    example: 'She savored her few hours of freedom and solitude.',
    origin: 'Latin solitudo',
  },
  {
    word: 'Aurora',
    pronunciation: '/əˈrôrə/',
    type: 'noun',
    definition: 'A natural electrical phenomenon characterized by the appearance of streamers of reddish or greenish light in the sky.',
    example: 'We traveled north to see the spectacular aurora.',
    origin: 'Latin "dawn"',
  },
  {
    word: 'Ethereal',
    pronunciation: '/əˈTHirēəl/',
    type: 'adjective',
    definition: 'Extremely delicate and light in a way that seems not to be of this world.',
    example: 'Her ethereal beauty made her look like a fairy tale princess.',
    origin: 'Greek aither "ether"',
  },
  {
    word: 'Vellichor',
    pronunciation: '/ˈveləˌkôr/',
    type: 'noun',
    definition: 'The strange wistfulness of used bookstores.',
    example: 'Entering the old library, he was overcome by a sense of vellichor.',
    origin: 'Dictionary of Obscure Sorrows',
  },
]

export const DAILY_QUOTES = [
  {
    text: 'He who has a why to live can bear almost any how.',
    author: 'Friedrich Nietzsche',
  },
  {
    text: 'The only true wisdom is in knowing you know nothing.',
    author: 'Socrates',
  },
  {
    text: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius',
  },
  {
    text: 'Quality is not an act, it is a habit.',
    author: 'Aristotle',
  },
  {
    text: 'Believe you can and you\'re halfway there.',
    author: 'Theodore Roosevelt',
  },
  {
    text: 'The mind is everything. What you think you become.',
    author: 'Buddha',
  },
  {
    text: 'Knowledge speaks, but wisdom listens.',
    author: 'Jimi Hendrix',
  },
  {
    text: 'The journey of a thousand miles begins with one step.',
    author: 'Lao Tzu',
  },
]

export function getDailyWord() {
  // Use the current date to deterministically select a word
  const date = new Date()
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 * 60 * 60 * 24)
  const index = dayOfYear % DAILY_WORDS.length
  return DAILY_WORDS[index]
}

export function getDailyQuote() {
  const date = new Date()
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 * 60 * 60 * 24)
  const index = dayOfYear % DAILY_QUOTES.length
  return DAILY_QUOTES[index]
}
