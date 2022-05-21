import React from "react";

const Fotter = () => {
    const date = new Date()
    const year = date.getFullYear()
  return (
    <div className="bg-[#242c32]">
      <footer class="footer grid-rows-1 mx-auto p-10 bg-[#242c32] text-neutral-content lg:px-16 mt-32">
        <div className="text-white">
          <span class="footer-title">Services</span>
          <a class="link link-hover">Car parts</a>
          <a class="link link-hover">Car repair</a>
          <a class="link link-hover">Car modify</a>
        </div>
        <div className="text-white">
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
        </div>
        <div className="text-white">
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
        <div className="text-white">
          <span class="footer-title">Social</span>
          <a class="link link-hover">Twitter</a>
          <a class="link link-hover">Instagram</a>
          <a class="link link-hover">Facebook</a>
          <a class="link link-hover">Github</a>
        </div>
        <div className="text-white">
          <span class="footer-title">Explore</span>
          <a class="link link-hover">Features</a>
          <a class="link link-hover">Enterprise</a>
          <a class="link link-hover">Security</a>
          <a class="link link-hover">Pricing</a>
        </div>
        <div className="text-white">
          <span class="footer-title">Apps</span>
          <a class="link link-hover">Mac</a>
          <a class="link link-hover">Windows</a>
          <a class="link link-hover">iPhone</a>
          <a class="link link-hover">Android</a>
        </div>
      </footer>
      <div>
        <p className="text-white text-center">Copyright © {year} - All right reserved by Shariar</p>
      </div>
    </div>
  );
};

export default Fotter;
