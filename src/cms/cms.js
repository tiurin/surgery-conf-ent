import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ProgramPagePreview from './preview-templates/ProgramPagePreview'
import SpeakersPagePreview from './preview-templates/SpeakersPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import SponsorsPagePreview from './preview-templates/SponsorsPagePreview'
import RegistrationPagePreview from './preview-templates/RegistrationPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('program', ProgramPagePreview)
CMS.registerPreviewTemplate('speakers', SpeakersPagePreview)
CMS.registerPreviewTemplate('sponsors', SponsorsPagePreview)
CMS.registerPreviewTemplate('registration', RegistrationPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
