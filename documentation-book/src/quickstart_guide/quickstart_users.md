# Quickstart Guide for User Studies

## Installation/Building/Running

In the beta phase of our project, if you have been asked to participate in our user studies, then you should have received an archive of our project. Unzip the archive. You will also need to have [Docker Compose](https://docs.docker.com/compose/install) installed on your machine. You can use the linked guide which uses Docker Desktop on most platforms, but it is also possible to use Colima or some alternatives. As long as you have access to the `docker compose` commands, you should be good to go! In the main directory of the FreezeTag project, run

```
docker compose up
```

This may take a while the first time, it will build the frontend and backend docker images and then begin serving content. You can access the frontend using <http://localhost:3000>, and view the backend API documentation using <http://localhost:3824/swagger>. To kill the project, run

```
docker compose down
```

in this same directory. You can run the `up` command again in the future to start back up, and your data should be retained.

## Using the Software

On first boot, you won't be logged in and will see a login screen. We automatically generate credentials with the username and password of `admin` for you to sign in initially. You can change your password in Settings if you like the `admin` username, or you can make a new account in Accounts, assign it all permissions, and then use that new account to remove `admin`. Either way, you probably want to make it so other users can't sign in with those default credentials. Once you settle this initial account setup, you can start using the app! The following sections give a brief overview of each page, and I recommend at least skimming this before you start playing with the app.

### Gallery

This is the "home" page and also is the primary page you'll use for most normal behavior. There's a gallery of images as well as a search bar that allows you to narrow down images by tags or metadata. If you type into the search bar, it will search by tag by default using substring matching. You can use double-quotes `"` to force strict matching. Ie, `car` will return tags that include `car`, such as `carpet` but `"car"` will not return `carpet`.

- `near=X,Y,Z` -- Gives you images that are within `Z` of coordinates `X` and `Y`. `Z` is automatically parsed as miles, but you can change this to kilometers in Settings. Also, you can use format specifiers for `Z` such as `40deg` to change the unit on the fly. Kilometers, meters, miles, degrees, feet, and yards are all supported.
- `make=X` -- Gives you images that have metadata which indicate they were taken by a camera of make `X`. This also permits the use of quotes for strict matching, like tags.
- `model=X` -- Gives you images that have metadata which indicate they were taken by a camera of model `X`. This also permits the use of quotes for strict matching, like tags.
- `takenBefore=X` -- Gives you images that have metadata indicating they were taken after the time indicated by `X`. The date parser is very permissive and most forms of month-day-year days and times work. There will be a visual error if your format does not parse correctly. UNIX timestamps also work.
- `takenAfter=X` -- Same as `takenBefore`, but filters images taken after the `X` datetime.
- `uploadedBefore=X` and `uploadedAfter=X` -- Same as `takenBefore` and `takenAfter`, but works on the date they were uploaded to FreezeTag.

You can combine search queries by separating them with semicolons. For example, `"cave"; takenAfter=Jan 1 2020` returns any images with the exact tag `cave` and were taken after January 1st, 2020. The search bar has autocomplete and hints available to help you form queries.

The search bar has a `Tags` button which shows a dropdown containing all tags that exist on all visible images, as well as their frequency. Each of the displayed tags is a button that lets you automatically strict-search for that tag. There is also a `Sort` button that lets you sort images by either `Date Created` or `Date Added`, in ascending or descending order.

![Example of the Gallery](./quickstart_guide/gallery.png)

Each image can be clicked to view a details panel. It shows all available metadata on the image, and has buttons to allow you to download the source image (the visible images are thumbnails parsed into WEBP that we generate), delete the image from the app, and change its tags. Arrow keys let you cycle between images, and clicking off of this page hides the details panel.

![Example of the Details Panel](./quickstart_guide/details.png)

### Upload

This is the page through which you will be able to upload images and give them manual tags. When you get to this page initially, there is just an `Upload images` button. Click this, or use drag-and-drop, to upload your images with a regular file upload dialog. Most normal image formats work, if you find any that don't then please let us know! Our ImageMagick-based parser works on nearly every common image type.

When you upload images, a progress bar will appear. This progress bar represents the backend doing some initial parsing of the image to make thumbnails and extract metadata. You can click through the background to access the app during upload, but this will make it impossible to use the post-upload mass-tagging workflow. Once the progress bar is complete you will see a page like this, with a gallery and a tags list:

![Upload Page](./quickstart_guide/upload.png)

If you want to add tags, you can click on images to select them (or use Select/Deselect All) and then use the list of tags to pick the best tags. If you want to add a new tag, use the input bar at the bottom. That bar also acts as a tag search. Once you like the tags you picked, hit `Submit Tags!` If you want to add more than one new tag, you can use the bar repeatedly. Once you are done tagging, you can leave this page and your changes will have been saved and available in the other pages.