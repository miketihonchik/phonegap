package com.tihonchik.phonegap;

import org.apache.cordova.*;
import android.os.Bundle;

public class PhoneGapApp01 extends CordovaActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.init();
        // Set by <content src="index.html" /> in config.xml
        //super.loadUrl(Config.getStartUrl());
        super.loadUrl("file:///android_asset/www/index.html");
    }
}