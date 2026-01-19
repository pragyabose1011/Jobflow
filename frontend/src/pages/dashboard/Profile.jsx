import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { UserImage, ProfileForm, Logout } from "../../components"
import { uploadUserImage } from "../../features/user/userSlice"
import { MdCameraAlt } from "react-icons/md"

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile")
  const { uploadLoading } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const handleUpload = (e) => {
    const imageFile = e.target.files[0]
    const formData = new FormData()
    formData.append("image", imageFile)
    dispatch(uploadUserImage(formData))
  }

  return (
    <>
      <section className="my-10 mb-28 space-y-10 px-5 md:px-8">
        <h4 className="text-3xl">Account Settings</h4>
        <div className="hidden space-x-10 text-lg md:block">
          {["my details", "profile", "password"].map((btn, index) => {
            return (
              <button
                key={index}
                onClick={() => setActiveTab(btn)}
                className={`rounded-md px-8 py-2 capitalize outline-2 hover:outline active:outline ${
                  activeTab === btn
                    ? "bg-primary text-white outline-primary"
                    : "bg-white text-gray-700 outline-gray-300"
                }`}
              >
                {btn}
              </button>
            )
          })}
        </div>

        {activeTab === "profile" && (
          <>
            <div className="space-y-2">
              <h4 className="text-2xl">Profile</h4>
              <p className="text-gray-500">
                Update your phone and personal details here.
              </p>
            </div>
            <div className="relative w-28">
              <UserImage className="h-28 w-28 lg:h-28 lg:w-28" />
              <form className="absolute -bottom-0 right-0 rounded-full border-2 border-gray-200 bg-primary px-2 py-2">
                <input
                  name="image"
                  onChange={handleUpload}
                  accept="image/*"
                  type="file"
                  id="upload_button"
                  className="hidden w-full text-sm text-slate-500 file:mr-4 file:cursor-pointer file:rounded-xl file:border file:border-gray-300 file:bg-primary file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-violet-100 file:hover:bg-primary/95"
                />
                <label htmlFor="upload_button">
                  <MdCameraAlt
                    className={`h-4 w-4 text-white ${
                      uploadLoading ? "animate-spin" : null
                    }`}
                  />
                </label>
              </form>
            </div>
            <ProfileForm />
          </>
        )}

        {activeTab === "my details" && (
          <div>
            <h4 className="text-2xl">My Details</h4>
            <p>Details content here (e.g., ProfileForm or other info).</p>
            <ProfileForm />
          </div>
        )}

        {activeTab === "password" && (
          <div>
            <h4 className="text-2xl">Change Password</h4>
            <p>Password change form here.</p>
            {/* Add a password form component if needed */}
          </div>
        )}
      </section>
    </>
  )
}

export default Profile