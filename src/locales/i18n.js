import { createI18n } from 'vue-i18n'
import en from './lang/en.json'
import de from './lang/de.json'
import fr from './lang/fr.json'
import it from './lang/it.json'
import nl from './lang/nl.json'
import pl from './lang/pl.json'

const i18n = createI18n({
  locale: 'en',
  messages: {
    de,
    en,
    fr,
    it,
    nl,
    pl,
  },
})

export default i18n
