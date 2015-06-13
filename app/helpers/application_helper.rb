module ApplicationHelper
  def webpack_manifest_script
    return '' unless Rails.configuration.webpack[:use_manifest]
    javascript_tag "window.webpackManifest = #{Rails.configuration.webpack[:common_manifest]}"
  end
  
  def webpack_bundle_tag(bundle)
    if Rails.configuration.webpack[:use_manifest]
      manifest = Rails.configuration.webpack[:asset_manifest]
      filename = manifest[bundle]
      src = "#{compute_asset_host}/assets/#{filename}"
    else
      src = "#{bundle}-bundle"
    end

    javascript_include_tag(src)
  end
end
