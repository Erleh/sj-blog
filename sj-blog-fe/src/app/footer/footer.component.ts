import { Component } from '@angular/core';
import { DiscordSvgIconComponent } from "../common/svgs/discord-svg-icon/discord-svg-icon.component";
import { YoutubeSvgIconComponent } from "../common/svgs/youtube-svg-icon/youtube-svg-icon.component";
import { TextLogoSvgIconComponent } from "../common/svgs/text-logo-svg-icon/text-logo-svg-icon.component";
import { InstagramSvgIconComponent } from "../common/svgs/instagram-svg-icon/instagram-svg-icon.component";
import { XSvgIconComponent } from "../common/svgs/x-svg-icon/x-svg-icon.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DiscordSvgIconComponent, YoutubeSvgIconComponent, TextLogoSvgIconComponent, InstagramSvgIconComponent, XSvgIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
