package com.quiz;

import android.app.Application;
import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;

import org.pgsqlite.SQLitePluginPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication implements ReactApplication {

  @Override
  public boolean isDebug()
  {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
  }

  @Override
  protected ReactGateway createReactGateway()
  {
    ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
      @Override
      protected String getJSMainModuleName()
      {
        return "index";
      }
    };
    return new ReactGateway(this, isDebug(), host);
  }


  @Override
  public List<ReactPackage> createAdditionalReactPackages()
  {
    return getPackages();
  }
  /**
   * A list of packages used by the app. If the app uses additional views
   * or modules besides the default ones, add more packages here.
   */
  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
            new SQLitePluginPackage(),   // register SQLite Plugin here
            new MainReactPackage());
  }
}
