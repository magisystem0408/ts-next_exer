import Layout from "../component/Layout";
import {useAuth} from "../context/Auth";


export default function Home() {
  const {currentUser,login,logout}=useAuth()

  return (
  <Layout title="home">
    <div className="container">

      {!currentUser && <button　onClick={login}>ログイン</button>}
      {currentUser &&
      <div>
        <p>{currentUser.email}でログイン中</p>
        <button onClick={logout}>ログアウト</button>
      </div>

      }

    </div>



  </Layout>
  )
}
