'use strict';
import React, {Component} from 'react';
import $ from 'jquery';
export default class Pagination extends Component {
    constructor(props){
        super(props);
    }
    /**
     * props:
     * total: [number]
     * show: [number]
     * page: [number]
     * func: [calback] : return page click to view
     */
    render(){
        let {total, show, page} = this.props;
        page = parseInt(page);
        total = parseInt(total);
        show = parseInt(show);
        let showing = parseInt(parseInt(total)/(parseInt(show)));
        let pageshow, pagelast = 0;
        let haveFirst, haveLast;
        if(page > 4){
            pageshow = page - 3;
            if(showing >= page + 3)
                pagelast = page + 3;
            else
                pagelast = showing ;
        }else{
            pageshow = 1;
            if(showing >= page + 3)
                pagelast = page + 3;
            else
                pagelast = showing ;
        }
        if(showing > pageshow + 3)
            haveLast = (<li><a href={`${this.props.url}/page/${showing}`}><i className="fa fa-angle-double-right"></i></a></li>);
        if(pageshow > 1)
           haveFirst = (<li><a href={`${this.props.url}/page/1`}><i className="fa fa-angle-double-left"></i></a></li>);
        let data = [];
        for(let i = pageshow; i <= pagelast; i++){
            if(i == page)
                data[i] = {page: i, current: true};
            else
                data[i] = {page: i, current: false};
        }
        let next, prev;
        if(page > 2)
            prev = (<li><a href={`${this.props.url}/page/${parseInt(page) - 1}`}><i className="fa fa-angle-left"></i></a></li>);
        if(page < showing)
            next = (<li><a  href={`${this.props.url}/page/${parseInt(page) + 1}`}><i className="fa fa-angle-right"></i></a></li>);
        return(
            <ul className="pagination padding-none margin-none">
                {haveFirst}
                {prev}
                {
                    data.map(function(node,i){
                        let style = node.current == true ? "active" : "";
                        return (<li className={style} key={node.page}><a href={`${this.props.url}/page/${node.page}`}>{node.page}</a></li>);
                    }.bind(this))
                }
                {next}
                {haveLast}
            </ul>
        );
    }
    componentDidMount() {
        this.onClickPagination();
    }
    onClickPagination(){
        $(document).on('click', '.pagination li a', (e) => {
            e.preventdefault();
        });
    }
}