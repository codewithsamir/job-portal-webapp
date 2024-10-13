import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import Buttons from '@/components/Button'
const page = () => {
  return (
    <div>
    
      <h1 >Home Page</h1>
      <h2>hello viewers</h2>
      <Card className="w-[350px] bg-green-500 p-0 overflow-hidden">
  <CardHeader className="w-full h-[200px] p-0 ">
  <img src="https://images.unsplash.com/photo-1725610588097-9ba8efa96b17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full" />
   
  </CardHeader>
  <CardContent className="p-4">
  <CardTitle>Card Title</CardTitle>
  <CardDescription>Card Description</CardDescription>
  </CardContent>

</Card>

      <Buttons color="bg-green-500" name="hello samir" />
      <Button variant="default" size={"default"} className="bg-green-500 p-10 rounded-full hover:bg-red-500">click here</Button>
    </div>
  )
}

export default page