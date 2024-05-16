import { useEffect } from "react";
import { UserSettings } from "../user/UserSettings";
import { useUserSettings, useUserPosts, useUserDetails } from "../../shared/hooks";
import { LoadingSpinner } from "../LoadingSpinner";
import { PasswordSettings } from "./PasswordSettings";
import { UsersPosts } from "../posts/UsersPosts"

export const Settings = () => {

    const { getUserPosts, allUserPosts, isFetching: isPostsFetching } = useUserPosts();
    const { userSettings, isFetching, saveSettings } = useUserSettings()
    const { isLogged } = useUserDetails();

    useEffect(() => {
        getUserPosts(isLogged);
    }, []);

    if (isFetching || isPostsFetching) {
        return <LoadingSpinner />
    }

   /* return (
        <div>
            <div className="settings-container">
                <div>
                    <span>Settings</span>
                    <UserSettings settings={userSettings} saveSettings={saveSettings} />
                </div>
                <div>
                    <span>Change password</span>
                    <PasswordSettings />
                </div>
            </div>
            <UsersPosts posts={allUserPosts || []} />
        </div>
    )*/

    return (
        <div>
           
            <UsersPosts posts={allUserPosts || []} />
        </div>
    )
}