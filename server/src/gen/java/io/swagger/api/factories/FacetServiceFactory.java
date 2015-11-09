package io.swagger.api.factories;

import io.swagger.model.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by anram88 on 10/29/15.
 */
public class FacetServiceFactory {


    /**
     * Checks if facet is type rating facet
     * @param facet_id
     * @param ratingFacets
     * @return boolean
     */
    public static boolean isRatingFacet(String facet_id, List<FacetInfoWithChildren> ratingFacets) {
        for (FacetInfoWithChildren ratingFacet : ratingFacets) {
            if (ratingFacet.getFacetId().equals(facet_id)) {
                return true;
            }
        }
        return false;
    }

    public static FacetInfoWithChildren getFacet (String facet_id, List<FacetInfoWithChildren> sourceList) {
        for (FacetInfoWithChildren _facet : sourceList) {
            if (_facet.getFacetId().equals(facet_id)) {
                return _facet;
            }
        }
        return null;
    }

    public static List<AlbumInfo> filterAlbumByRatingFacet(List<AlbumInfo> albumList, String facet_id) {
        List<AlbumInfo> result = new ArrayList<AlbumInfo>();
        for (AlbumInfo album : albumList) {
            if (fitsInRating(album.getAverageRating(), facet_id)) {
                result.add(album);
            }
        }
        return result;
    }

    public static List<SongInfo> filterSongsByRatingFacet(List<SongInfo> songList, String facet_id) {
        List<SongInfo> result = new ArrayList<SongInfo>();

        for (SongInfo song : songList) {
            if (fitsInRating(song.getAverageRating(), facet_id)) {
                result.add(song);
            }
        }
        return result;
    }

    public static List<ArtistInfo> filterArtistByRatingFacet(List<ArtistInfo> artistList, String facet_id) {
        List<ArtistInfo> result = new ArrayList<ArtistInfo>();

        for (ArtistInfo artist : artistList) {
            if (fitsInRating(artist.getAverageRating(), facet_id)) {
                result.add(artist);
            }
        }
        return result;
    }

    /**
     * Checks if rating fits in a specified facet category
     * @param rating
     * @param facet_id
     * @return
     */
    private static boolean fitsInRating(BigDecimal rating, String facet_id) {
        switch (Integer.parseInt(facet_id)) {
            case 14:
                if (rating.compareTo(new BigDecimal("4")) >= 0) {
                    return true;
                }
                break;
            case 13:
                if (rating.compareTo(new BigDecimal("3")) >= 0) {
                    return true;
                }
                break;
            case 12:
                if (rating.compareTo(new BigDecimal("2")) >= 0) {
                    return true;
                }
                break;
            case 11:
                if (rating.compareTo(new BigDecimal("1")) >= 0) {
                    return true;
                }
                break;
        }
        return false;
    }

}
