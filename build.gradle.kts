// Top-level build file where you can add configuration options common to all sub-projects/modules.
plugins {
    alias(libs.plugins.android.application) apply false
}
android {
    defaultConfig {
        versionCode = 1
        versionName = "1.0"
    }
}
