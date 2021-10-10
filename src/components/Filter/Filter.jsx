import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Label } from "./Filter.styled";
import { changeFilter } from "../../redux/contacts/filter/contacts-filter-actions";

function Filter({ onFilter, filterStr }) {
  console.log("onFilter", onFilter);
  console.log("filterStr", filterStr);
  return (
    <Label>
      Find contacts by name
      <input name="filter" value={filterStr} onChange={onFilter}></input>
    </Label>
  );
}

const mapStateToProps = (state) => ({
  filterStr: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onFilter: (e) => dispatch(changeFilter(e.target.value.toLowerCase())),
});

Filter.propTypes = {
  onFilter: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
