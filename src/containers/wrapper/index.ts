import { connect } from "react-redux";
import View from "../../components/wrapper";
import { mapDispatchToProps } from "./map-dispatch-to-props";
import { mapStateToProps } from "./map-state-to-props";

export default connect(mapStateToProps, mapDispatchToProps)(View);
