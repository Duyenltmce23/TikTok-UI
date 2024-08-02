import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
import { HeaderOnly } from '~/Layout'
export const routes = [
    {
        path: '/', element: <Home />,
    },
    {
        path: '/following', element: <Following />,
    },
    {
        path: '/profile', element: <Profile />, layout: null
    },
    {
        path: '/upload', element: <Upload />, layout: HeaderOnly
    },
    {
        path: '/search', element: <Search />, layout: null
    }

]
