exports.getLatestReleases = function (req, res, next) {
  res.json({
    latest: {
      android_studio: {
        name: "Android Studio",
        version: "2023.2.1.23",
        download_links: {
          windows:
            "https://redirector.gvt1.com/edgedl/android/studio/install/2023.2.1.23/android-studio-2023.2.1.23-windows.exe",
          linux:
            "https://redirector.gvt1.com/edgedl/android/studio/ide-zips/2023.2.1.23/android-studio-2023.2.1.23-linux.tar.gz",
          macos:
            "https://redirector.gvt1.com/edgedl/android/studio/install/2023.2.1.23/android-studio-2023.2.1.23-mac.dmg",
        },
      },
      visual_studio_code: {
        name: "Visual Studio Code",
        version: "latest",
        download_links: {
          windows:
            "https://update.code.visualstudio.com/latest/win32-x64/stable",
          linux: "https://update.code.visualstudio.com/latest/linux-x64/stable",
          macos: "https://update.code.visualstudio.com/latest/darwin/stable",
        },
      },
      intellij_idea: {
        name: "IntelliJ IDEA",
        version: "2023.3.5",
        download_links: {
          windows: "https://download.jetbrains.com/idea/ideaIU-2023.3.5.exe",
          linux: "https://download.jetbrains.com/idea/ideaIU-2023.3.5.tar.gz",
          macos: "https://download.jetbrains.com/idea/ideaIU-2023.3.5.dmg",
        },
      },
      scripts: {
        append_to_path: {
          name: "Append To PATH",
          download_links: {
            windows:
              "https://gist.githubusercontent.com/ujjwalsittu/24ab9dc6c4e92bb810d774fad5d5ba67/raw/5c58ca907e1e6776a269c77abf319310ea36152f/append-to-path.bat",
            linux:
              "https://gist.githubusercontent.com/ujjwalsittu/b5a8f23325ffca5a0d89f81eeefc9f62/raw/37fda42febac505b0ca85eb731685171ab8f9617/append-to-path.sh",
            macos:
              "https://gist.githubusercontent.com/ujjwalsittu/4184123c4ac73cbd537c67061a085cb5/raw/23e8a7a852d39fe75fb22a6b5e7dd60b10b8b72a/append-to-path-zsh.sh",
          },
        },
        dist: {
          name: "Get Distro Name Script",
          download_links: {
            windows: "",
            linux:
              "https://gist.githubusercontent.com/ujjwalsittu/f5703a6043fed08a03aac2596c3dfc08/raw/5862f5ffb31734a8234a8bf4109d7c3901764f3c/dist-linux.sh",
            macos:
              "https://gist.githubusercontent.com/ujjwalsittu/75b440e4fb69f952c2c1006e32142a2f/raw/5dba2eb8b1f486bbec896298f7d43b3c14ec6ce9/dist-macos.sh",
          },
        },
      },
    },
  });
};
