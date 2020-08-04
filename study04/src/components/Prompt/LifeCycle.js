import React, { Component } from 'react';

class LifeCycle extends Component {


    componentDidMount() {
        if (this.props.onMount) {
            this.props.onMount.call(this, this);
        }
    }

    componentWillUnmount() {
        if (this.props.onUnMount) {
            this.props.onUnMount.call(this, this);
        }
    }

    render() {
        return (
            <div className="modal fade" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">提示信息：</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.message && this.props.message}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">取消</button>
                            <button type="button" className="btn btn-primary">确定</button>
                        </div>
                    </div>
                </div>
            </div>
            // null
        );
    }
}

export default LifeCycle;
