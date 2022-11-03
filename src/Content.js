import EmailBody from "./Email-Body";
import EmailHeader from "./Email-Header";
import EmailActions from "./Email-Actions";

function Content() {
  return (
    <article className="email-content">
      <div className="title">
        <h1>Welcome to Flaticon</h1>
      </div>
      <EmailHeader />
      <EmailBody />
      <EmailActions />
    </article>
  );
}
export default Content;
