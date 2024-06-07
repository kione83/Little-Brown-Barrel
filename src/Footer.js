import React from "react";

function Footer() {
	return (
		<footer className="site-footer">
			<div className="footer-content">
				<p>&copy; {new Date().getFullYear()} <a className='footer-email' href="mailto:kione83@gmail.com">Steve Marlow</a>. All rights reserved, content is property of Little Brown Barrel, Minersville, PA. Created by <a className='footer-email' href="mailto:kione83@gmail.com">Steve Marlow</a> and <a className='footer-email' href="mailto:#">Brion Lentell</a>. Find Little Brown Barrel on <a href='https://www.facebook.com/LittleBrownBarrel'>Facebook</a> and <a href='https://www.instagram.com/thelittlebrownbarrel/'>Instagram</a> </p>
			</div>
		</footer>
	);
}

export default Footer;