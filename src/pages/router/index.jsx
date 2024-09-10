import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import App from '../../App'
import { SignIn, AdminLayout, StudentLayout, Student, Teacher } from "@pages";

const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<App />}>  
            <Route index element={<SignIn/>}/>
            <Route path='admin' element={<AdminLayout/>}/>
            <Route path="teacher" element={<Teacher/>}/>
            <Route path="student" element={<Student/>}/>
            <Route/>
            <Route path='student-layout' element={<StudentLayout/>}/>
          </Route>
        )
      );
      return <RouterProvider router={router}/>
}

export default Index