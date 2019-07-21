import React from "react"
import "./style.css"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import BodyClassName from 'react-body-classname';
class Quote extends React.Component {

    state = {
        allQuotes: [],
        quote: {},
        color: ""
    }

    newQuote(quotes) {
        console.log(quotes)
        let min = 0,
            max = 4,
            quote,
            random = Math.floor(Math.random() * (+max - +min)) + +min,
            color = this.randomColor()


        //quote = quotes[random]
        this.setState({color});
        //this.setState({ quote: quote.node ,color })
    }
    randomColor() {

        let rc = "#";
        for (let i = 0; i < 6; i++) {
            rc += Math.floor(Math.random() * 16).toString(16);
        }
        return rc;
    }
    componentWillMount() {
        console.log(this.props.quote)
        this.setState({ allQuotes: this.props.quote })
        this.newQuote(this.props.quote)
    }

    render() {
        console.log(this.state.color)
        return (
            
            <div align="center" className='container' css={css`background-color : ${this.state.color};`}>
                <BodyClassName className={css`background-color : ${this.state.color};`}></BodyClassName>
                <div className="newquote row valign-wrapper">
                    <div className="col s6 offset-s1 valign">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <p className="p1">{
                                    //console.log(this.state.quote)
                                    //this.state.quote.quote.quote
                                }</p>
                                <p className="p2 col s6 offset-s6">- {this.state.quote.author}</p>
                            </div>
                            <div>
                                <div className="fl">
                                    <div className="row">
                                        <div className="col twit">
                                            <button className="btn btn1" id="tweetit" css={css`background-color : ${this.state.color} !important;`}>Tweet</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="fr">
                                    <div className="row">
                                        <div className="col s6 offset-s6 topm">
                                            <button className="btn btn2" id="quoteGETAJAX" css={css`background-color : ${this.state.color} !important;`} onClick={e => this.newQuote(this.state.allQuotes)}>New</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quote
