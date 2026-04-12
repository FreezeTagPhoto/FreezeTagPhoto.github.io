# Use Cases

This section will cover several common tasks, and how to complete them using FreezeTag. This will be a less-detailed guide compared to the page-by-page guide in the next chapter, but should allow you to get up-and-running based on your use-case.

You can use the section headings on the left (you can collapse/uncollapse this menu with the hamburger button) to navigate to specific tasks.

## Uploading Images

To upload images, navigate to the Upload page. You will see an "Upload Images" button, you can click it to open a file dialog, but drag-and-drop works as well. We support the vast majority of image formats that you are likely to use, based on our use of ImageMagick for processing. Once you upload your images, you will see a progress bar like so:
![Upload Progress](./upload_progress.png)
This progress bar indicates that the images have already uploaded to the backend server, but that their metadata is still being extracted and thumbnails are being created. At this point, it's safe to navigate off of the page if you would like, your data will be retained. However, you should not kill the server while this process is occurring.

Once the progress bar completes, you will be greeted with a gallery like this:

![Upload Gallery](./upload_gallery.png)

From here, you can manually add image tags. To select the images you want to tag, you can just click on them. Selected images are given a blue border:

![Selected Image](./image_selected.png)

And you can use "Select All" or "Deselect All" to speed up the process. Then, we need to create a tag to give these images. You can type the name of the tag you want into the bar on the bottom right, then click the `+` button to add that tag to the instance:

![Added Tag](./added_tag.png)

The tag is added to the instance, but isn't yet applied to our selected images. To do so, click the checkbox next to the tag name in the list, and then click "Add Selected Tags". This will apply the tags to your selected images. You can repeat this process for as many tags as necessary, and as many unique images as needed to tag your images exactly the way you want. The bottom bar also acts as a search bar, if you have a lot of tags.

You may notice that new tags appear alongside the tags you added by hand. This is because, by default, we have some automated image tagging plugins enabled. You can view the details about those in [Automated Image Tagging](use_cases.md#automated-image-tagging).

## Modify Single Images

## Modify Images in Batches

## Automated Image Tagging

We provide some plugins that automatically tag images, and those can be configured by the user. On an account with the "Write Plugins" and "Read Plugins" permissions (such as the default admin account), navigate to the Plugins page:

![The Plugins Page](./plugins.png)

This page lists out all plugins that are installed by default, including the three plugins with "Post Upload" tagging capabilities. Enabled plugins are marked with a green power button, and disabled plugins are marked with a red power button. We provide accessible and custom themes to change these colors, if desired. Refer to [Color Themes](use_cases.md#color-themes) for more details. Disabled plugins are unable to run automatically, so this allows you to determine which plugins run upon upload.

For general image tagging, we provide "RAM Tagger" and "Google Gemini Tagger", with the former being enabled by default and the latter being disabled by default. RAM Tagger uses a local model that runs entirely on your machine to tag images, while Google Gemini Tagger must be configured with a Gemini API key to function. If you have an API key you would like to use, click "Configure" and provide your API key there. We recommend only having one of these plugins enabled, so if you choose to use Gemini then be sure to disable RAM Tagger. We also provide "Face Recognition", which uses another local model to recognize faces, based on seed images. That is explained in [Face Recognition](use_cases.md#face-recognition) if you would like to use the functionality, but if you do not need the functionality, then you can simply disable it.

## Face Recognition

When this plugin is enabled, it will search for seed images in the instance and use those to identify faces in newly uploaded images. To define a seed image, select an image that is a reasonably good headshot of the person you want to face recognize:

![Example Seed Image](./seed_image.png)

Then, upload this image to FreezeTag if you haven't already. Once it is uploaded, use one of the workflows discussed previously (either [Uploading Images](use_cases.md#uploading-images) or [Modify Single Images](use_cases.md#modify-single-images) as appropriate) to add a tag to this image. The tag should be called `person:<name>`, where `<name>` is replaced with the name of the person. For the given headshot, I would use `person:Brayden`. The Face Recognition plugin will then, on every future upload where it is enabled, search for all `person:` tags and use those to operate its local model, and tag new images with the name of the individual. So, any future image that is identified as being of Brayden will be tagged `Brayden`.

## Color Themes

By default, FreezeTag uses your browser's settings to determine whether it should be in light mode (using Catppuccin Latte) or dark mode (Catppuccin Mocha). This can be modified in the Preferences section of the Settings page.

![Preferences](./preferences.png)

You can use the dropdown menu to select your preferred theme. We support the basic Catppuccin themes (Mocha, Macchiato, Frappe, and Latte), variations of Mocha and Latte that are designed to work for colorblind users, high contrast themes, and Microsoft Hot Dog Stand.

![High Contrast Example](./high_contrast.png)

If you would like to customize the theme you use, you can select either Custom option and apply your theme changes as you would like. Variables are provided for every color we use in the app, so you can customize as you see fit.

![Custom Theme Example](./custom_theme.png)
