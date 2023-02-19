# Image Wrangling

text2img, img2img, ...

# Generation
- [Stable Diffusion UI by AUTOMATIC1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui) ([wiki](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki))
	- [NoCrypt's colabs](https://rentry.org/nocrypt) ⭐
	- [colab webui collection](https://github.com/camenduru/stable-diffusion-webui-colab)
	- [stable-diffusion-colab-tools](https://github.com/karaage0703/stable-diffusion-colab-tools)
	- [Google colab notebooks for Stable Diffusion](https://github.com/hashborgir/awesome-ai#google-colab-notebooks-for-stable-diffusion)
- [Stable Horde](https://stablehorde.net/)

## text2img
- AUTOMATIC1111
- Special models:
	- [civitai.com](https://civitai.com/) has lots of fine-tuned models
	- [Waifu Diffusion](https://huggingface.co/hakurei/waifu-diffusion-v1-4) works best with anime and other cartoon art
		- [Danbooru style prompting](https://gist.github.com/harubaru/f727cedacae336d1f7877c4bbe2196e1#prompting)

## img2img
- AUTOMATIC1111
- Special models:
	- [depthmap2mask](https://github.com/Extraltodeus/depthmap2mask)
	- [depth2img](https://github.com/AUTOMATIC1111/stable-diffusion-webui/pull/5542) (better than depth2mask)
		- works best with 3D art or photos
- Tip: use [Blender](https://www.blender.org/) to create simple 3D scenes to use in img2img

## Inpainting
- AUTOMATIC1111
- [diffuse-the-rest](https://huggingface.co/spaces/huggingface-projects/diffuse-the-rest)
- [How to make any model into an inpainting model](https://discord.com/channels/1037799583784370196/1066431771069140992) (Civitai discord post)

## Prompt inspiration
- Tools
	- [some9000/StylePile](https://github.com/some9000/StylePile)
	- [Stable Diffusion Prompt Generator](https://www.thomas.io/stable-diffusion-prompt-generator)
	- [stable-diffusion-webui-inspiration](https://github.com/yfszzx/stable-diffusion-webui-inspiration)
- Artist modifiers
	- [Artist Directory (Volcano Comparison)](https://aiartcreation.fandom.com/wiki/Artist_Directory_(Volcano_Comparison))
	- [Stable Diffusion V1 Artist Style Studies](https://proximacentaurib.notion.site/e28a4f8d97724f14a784a538b8589e7d?v=9d8b31b3cf544ed2bf2534446dbdfde0)
	- [Midjourney artist reference - Google Sheets](https://docs.google.com/spreadsheets/d/1e2MZ1K6WMTUuxlPAQ_2A0rz-H55NBykb66TY7DuerVg/edit#gid=2088669480)
	- [list of artists for SD v1.4](https://rentry.org/artists_sd-v1-4)
- Search generations:
	- [Nomic clusterized map](https://atlas.nomic.ai/map/809ef16a-5b2d-4291-b772-a913f4c8ee61/9ed7d171-650b-4526-85bf-3592ee51ea31)
	- [Lexica](https://lexica.art/)
	- [OpenArt](https://openart.ai/)
	- [PlaygroundAI](https://playgroundai.com/)
	- [Prompt Hunt](https://www.prompthunt.com/)
- Intuition promptbooks:
	- [Prompt book for data lovers II ❤️ - Google Slides](https://docs.google.com/presentation/d/1V8d6TIlKqB1j5xPFH7cCmgKOV_fMs4Cb4dwgjD5GIsg/edit#slide=id.g1834b964b0f_3_4)
	- [The Ultimate Stable Diffusion Prompt Guide by PromptHero](https://prompthero.com/stable-diffusion-prompt-guide)
	- [SD GUIDE FOR ARTISTS AND NON-ARTISTS - Google Docs](https://docs.google.com/document/d/1R2UZi5G-DXiz2HcCrfAFLYJoer_JPDEoZmV7wy1tEz0/edit#)

## img2text
- Interrogator in AUTOMATIC1111
- [Pic2Prompt](https://magicstudio.com/pic2prompt)
- [DeepDanbooru String](https://huggingface.co/spaces/NoCrypt/DeepDanbooru_string)
- [Google Vision](https://cloud.google.com/vision) (use the try window for free)

## Textual Inversion, Dreambooth, Hypernetworks
- Huh?
	- [What is textual inversion?](https://textual-inversion.github.io/)
	- [What is dreambooth?](https://dreambooth.github.io/)
	- [LoRA vs Dreambooth vs Textual Inversion vs Hypernetworks](https://www.youtube.com/watch?v=dVjMiJsuR5o) video
	- Textual Inversion = embeddings (~20kb) = new fine-tuned token = search for subject within existing model
	- Hypernetwork = extra layers (different filesize) = a filter on top of another model
	- Dreambooth = checkpoint (>2gb) or LoRA (different filesize) = model fine-tuned on instance token
	- Fine-tuning = checkpoint (>2gb) = model fine-tuned on many tokens
- Create and use:
	- Textual Inversion:
		- [Create and use embeddings in AUTOMATIC1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Textual-Inversion)
	- Hypernetwork:
		- [Hypernetwork training for dummies](https://rentry.org/hypernetwork4dumdums)
		- [Tutorial Hypernetwork - Monkeypatch method](https://civitai.com/models/4086)
	- DreamArtist (best one-shot?):
		- [DreamArtist-sd-webui-extension](https://github.com/7eu7d7/DreamArtist-sd-webui-extension)
	- Aesthetic gradient:
		- [stable-diffusion-webui-aesthetic-gradients](https://github.com/AUTOMATIC1111/stable-diffusion-webui-aesthetic-gradients) ([original repo](https://github.com/vicgalle/stable-diffusion-aesthetic-gradients))
	- Dreambooth:
		- [sd_dreambooth_extension](https://github.com/d8ahazard/sd_dreambooth_extension)
		- [stable-diffusion-dreambooth-colab](https://github.com/camenduru/stable-diffusion-dreambooth-colab)
		- [Make better Dreambooth style models by using captions](https://old.reddit.com/r/StableDiffusion/comments/zcr644/make_better_dreambooth_style_models_by_using/)
		- [LoRA](https://rentry.org/lora_train)
	- Fine-tuning:
		- [EveryDream](https://github.com/victorchall/EveryDream2trainer)
- Find:
	- [civitai.com](https://civitai.com/) has lots of embeddings and hypernetworks
	- [\#ai-art-embeddings channel on Waifu Diffusion Discord](https://discord.com/channels/930499730843250783/1044620915377451058)
	- [Stable Diffusion Textual Inversion Embeddings](https://cyberes.github.io/stable-diffusion-textual-inversion-models/)

# Editing

## Remove object
- [magiceraser](https://magicstudio.com/magiceraser)
- [zmo remover](https://remover.zmo.ai/)

## Remove background
- Topaz Mask AI [^1]
- [Photobear](https://photobear.io/background_removal) [^2]
- [remove.bg](https://www.remove.bg/)
- [removal.ai](https://removal.ai/)
- [slazzer](https://www.slazzer.com/)
- Tip: some of these will only give you lower res versions in the free versions. You can use them as a mask on the original, to get original res. 

## Upscale
- Topaz Gigapixel AI [^1]
- ESRGAN (available in AUTOMATIC1111)
- [stable-diffusion-upscaler](https://huggingface.co/spaces/stabilityai/stable-diffusion-upscaler)
- [SD 2.0 4x Upscaler](https://huggingface.co/spaces/Manjushri/SD-2.0-4X-Upscaler) (expects images lower than 512x512)
- [Photobear](https://photobear.io/super_resolution) [^2]
- [WaifuXL](https://waifuxl.com/)
- [BigJpg](https://bigjpg.com/)
- [more super-resolution tools](https://replicate.com/collections/super-resolution)

## Enchancer, Denoiser
- Topaz Sharpen AI [^1]
- Topaz DeNoise AI [^1]
- Topaz Adjust AI [^1]
- Topaz Studio 2 [^1]

## Bonus tools
- [Photobear Smart Compression](https://photobear.io/compression) [^2]
- [Photo Vectorization](https://photobear.io/vectorize) [^2]
- [Bulk Resize](https://www.birme.net/) — useful to clean up datasets
- [Glitch Tools](Glitch-Tools)



[^1]: You can [pirate it](Piracy-Open-Content)
[^2]:  Rip result images from webpage source code to get them for free