import React from 'react'
import PropTypes from 'prop-types'
import { ProgramPageTemplate } from '../../templates/program-page'

const ProgramPagePreview = ({ entry, widgetFor, getAsset }) => (
  <ProgramPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ProgramPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProgramPagePreview
