serve:
	npm run dev
build:
	rm static/generated_images/*.png
	python3.7 build.py
