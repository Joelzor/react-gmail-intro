
import EmailBody from "./Email-Body";
import EmailHeader from "./Email-Header";
function Content() {
  return (
    <article className="email-content">
      <div className="title">
        <h1>Welcome to Flaticon</h1>
      </div>
        <EmailHeader/>
        <EmailBody/>
      <section className="email-actions">
        <button>Reply</button>
        <button>Forward</button>
      </section>
    </article>
  );
}
export default Content;
