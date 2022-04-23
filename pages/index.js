import { useGlobalContext } from "../context";
import axios from 'axios'
import { useRouter } from "next/router";

export default function Auth() {
  let { userName, setUserName, secret, setSecret } = useGlobalContext();
  const router = useRouter();

  const onSubmit = async (e) => {

    e.preventDefault();
    if (userName !== '' && secret !== '') {
      console.log('ok')
      try {
        await axios.put(
          "https://api.chatengine.io/users/",
          { userName, secret },
          {
            headers: {
              "Private-Key": `${process.env.NEXT_PUBLIC_PRIVATE_KEY}`
            }
          }
        )
          .then((r) => {
            router.push("/chats");
          });
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">NextJS Chat</div>

          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
