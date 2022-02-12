
import "../styles/About.modulate.css";

export default function About() {
  return (
    <div className="about-box">
      <div className="top">
        <a href="https://www.linkedin.com/in/alejorrojas/">
          <img className="about-img" src="https://vercel.com/api/www/avatar/23455177a24a8f704443a8dc21df2c3a1da5c55a?s=160" alt="" />
        </a>
      </div>
      <div className="bottom">
        <h2 className="about-title">About me</h2>
        <hr />
        <h4>Hi! My name is Alejo and I'm a Frontend Developer</h4>
        <span>
          Coding is the most powerful tool that I have for creating and
          materialising my ideas. 💡 
          Since I was a kid, I was into technology 👨‍💻. How fast the IT world changes is what I liked the most and
          encouraged me to continue learning everyday in order to be always up
          to date with the latest technologies, syntax, projects and news.
          Nowadays, I'm currently studying at #SoyHenry Bootcamp🚀. Where I'm increasing not only my programming abilities, but also soft skills such as teamwork, problem solving and communication. 
          If you would like to know more about me, you can reach me on <a href="https://www.linkedin.com/in/alejorrojas/">Linkedin </a> or see my work on <a href='https://github.com/alejorrojas'>GitHub</a> .📩
        </span>
        
       
      </div>
    </div>
  );
}
