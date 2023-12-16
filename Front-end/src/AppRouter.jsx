import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegisterForm from "./pages/RegisterForm";
import LoginForm from "./pages/LoginForm";
import PrivateRoutes from "./components/PrivateRoutes";
import NewPost from "./pages/NewPost";
import NotFoundPage from "./pages/404Page";
//import PostPage from "./pages/PostPage";
import AuthProvider from "./providers/AuthProvider";

function AppRouter() {
  return (
    <Routes>
    {/*  Rutas Protegidas */}
   {   <Route element={<PrivateRoutes />}>
   {/*<Route path="/post/post:id" element={<PostPage />} />*/}
        
        <Route path="/post/new" element={<NewPost />} />
     {/*}  <Route path="/post/:postId" element={<CommentPage />} /> */}
  </Route> }

      {/* Rutas Públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/404" element={<NotFoundPage />} />
      
    </Routes>
  );
}
export default AppRouter;