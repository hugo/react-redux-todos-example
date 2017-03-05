import { connect } from 'react-redux'

import { toggleSelected } from '../actions/multiSelect'
import MultiSelect from '../components/MultiSelect'


const mapStateToProps = (state, props) => {
  return {
    selected: state.multiSelect.ids.indexOf(props.id) !== -1
  }
}

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => dispatch(toggleSelected(id))
})

const MultiSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiSelect)

export default MultiSelectContainer
