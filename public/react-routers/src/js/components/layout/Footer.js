import React from 'react';
import { Link } from 'react-router-dom';


export default class extends React.Component{
    constructor() {
        super();
        this.state = {collapsed : true};
    }
    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }
    render() {
        const featuredClass = location.pathname === "/" ? "active" : "";
        const bookmarkClass = location.pathname.match(/^\/bookmarks/) ? "active" : "";
        const historyClass = location.pathname.match(/^\/history/) ? "active" : "";
        const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
        const mypageClass = location.pathname.match(/^\/mypage/) ? "active" : "";
        return (
            <footer>
                <div class="row">
                    <div class="col-lg-12">
                        <h2 class="footer-main">YOT</h2>
                        <ul class="footer-menu" >
                            <li class={featuredClass}>
                                <Link to="/" onClick={this.toggleCollapse.bind(this)}>ranking</Link>
                            </li>
                            <li class={bookmarkClass}>
                                <Link to="/bookmarks/news?date=today&filter=none" onClick={this.toggleCollapse.bind(this)}>bookmark</Link>
                            </li>
                            <li class={settingsClass}>
                                <Link to="/settings" onClick={this.toggleCollapse.bind(this)}>search</Link>
                            </li>
                            <li class={historyClass}>
                                <Link to="/history/news?user=1010" onClick={this.toggleCollapse.bind(this)}>your history</Link>
                            </li>
                            <br />
                            <li>sign in</li>
                            <li>sign up</li>
                            <li class={mypageClass}>
                                <Link to="/mypage" onClick={this.toggleCollapse.bind(this)}>mypage</Link>
                            </li>
                            <li>about this </li>
                            <br />

                        </ul>
                        <p>Cooyright &cooy; yot.net</p>
                    </div>
                </div>
            </footer>
        );
    }
}