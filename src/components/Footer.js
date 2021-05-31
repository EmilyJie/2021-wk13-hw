export default function Footer() {
    return (
        <footer className="footer">
           
                <img src="/img/footer-word.png" className="footerword"/>
                <div>
                <p className="footer-topic1">MY ACCOUNT</p>
                <p className="footer-detail1">My Account<br/>
                                             Order History<br/>
                                             Wish List
                </p>
                </div>
                <div>
                <p className="footer-topic2">INFORMATION</p>
                <p className="footer-detail2">About Us<br/>
                                               Store Locatory<br/>
                                               Help<br/>
                                               Terms/Conditions
                </p>
                </div>
                <div>
                <p className="footer-topic3">CONTACT US</p>
                <p className="footer-detail3">Freesia Store<br/>
                                              02-0707060<br/>
                                              freesia2021@gmail.com
                </p>
                <a href="https://www.facebook.com/JoMaloneLondon/">
                <img src="/img/facebook.png" className="facebook-icon"/>
                </a>
                <a href="https://www.instagram.com/jomalonelondon/?hl=zh-tw">
                <img src="/img/instagram.png" className="instagram-icon"/>
                </a>
                <a href="https://ezstore.line.me/search?query=jomalone">
                <img src="/img/line.png" className="line-icon"/>
                </a>
                </div>
                <hr className="hr-footer-line" />
                <div className="footer-text">
                <p
                    className="text-gray2">
                    Privacy
                </p>
                <p
                    className="text-gray3">
                    Cookie Policy
                </p>
                <p
                    className="text-gray4">
                    Language
                </p>
                <p
                    className="text-gray5">
                    Ship to
                </p>
                <p
                    className="text-gray6">
                    © 2021 Freesia All Right Reserved
                </p>
                </div>
            
        </footer>           
    );
}